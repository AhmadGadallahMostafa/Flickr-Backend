const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const { ObjectID } = require('mongodb');
const Photo = require('../models/photos');
const checkAuth = require('../middleware/check-auth');
const User=require('../models/user');
const Invitation = require('../models/invitation')
//assumptions you should be the owner to edit members
//member id is sent with body
router.put('/admin/edit/:groupID',checkAuth,async(req,res)=>{
    try{
    userData = req.userData

    group = await Group.findById(req.params.groupID)
    if(!group.owner.equals(userData.userId)){
        return res.status(414).send({
            message:"You aren't authorized to change members/admins status"
        })
    }

    //get members ids
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))
    //if user is a member make him admin
    if(members.indexOf(req.body.userID) !== -1){
        group.members.splice(members.indexOf(req.body.userID),1) 
        admin = {
            admin:ObjectID(req.body.userID)
        }   
        group.admins.push(admin)
        await group.save()
        return res.send({
            message:"User upgraded"
        })       
    }

    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))

    //if user is an admin
    if(admins.indexOf(req.body.userID) !== -1){
        group.admins.splice(admins.indexOf(req.body.userID),1) 
        member = {
            member:ObjectID(req.body.userID)
        }   
        console.log(member)
        group.members.push(member)
        await group.save()
        return res.send({
            message:"User downgraded"
        })       
    }
    res.status(400).send({
        message:"user isn't a member or admin in the group"
    })
    }catch(e){
        res.status(400).send(e)
    }
})
//remove a member // needs checking with postman
router.delete('/admin/remove/:groupID',checkAuth,async(req,res)=>{
    try{
    userData = req.userData

    group = await Group.findById(req.params.groupID)
    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))
    if((!group.owner.equals(userData.userId)) && (admins.indexOf(userData.userId) === -1)){
        return res.status(414).send({
            message:"You aren't authorized to remove members"
        })
    }
    //get members ids
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))
    //if user is a member make him admin
    if(members.indexOf(req.body.userID) !== -1){
        group.members.splice(members.indexOf(req.body.userID),1) 
        await group.save()
        return res.send({
            message:"user removed"
        })       
    }
    res.status(400).send({
        message:"User isn't a member in the group"
    })
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/admin/invite',checkAuth,async(req,res)=>{
    try{
    userData = req.userData

    group = await Group.findById(req.body.groupId)
    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))
    if((!group.owner.equals(userData.userId)) && (admins.indexOf(userData.userId) === -1)){
        return res.status(414).send({
            message:"You aren't authorized to invtie members"
        })
    }

    //get members ids
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))
    //if user is a member make him admin
    if(members.indexOf(req.body.userId) !== -1){
        return res.send({
            message:"User is Already a member in the group"
        })       
    }
    //checks if there's a user with this id
    await User.findById(req.body.userId)
    inv = await Invitation.find({
            user:ObjectID(req.body.userId),
            sender:ObjectID(userData.userId)
    })
    if(inv.length)
    return res.status(400).send({
        message:"Invitation is already sent"
    })
    invitation = new Invitation({
        user:ObjectID(req.body.userId),
        sender:ObjectID(userData.userId)
    })
    await invitation.save()
    res.status(400).send({
        message:"Invitation sent"
    })
    }catch(e){
        res.status(400).send(e)
    }
})

// helper funcs
//

module.exports = router

