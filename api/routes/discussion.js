const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const { ObjectID } = require('mongodb');
const Photo = require('../models/photos');
const checkAuth = require('../middleware/check-auth');
const User=require('../models/user');
const Discussion = require('../models/discussion');

//needs checking after creating a discussion
router.get('/group/discussions/:groupId',checkAuth,async(req,res)=>{

    userData = req.userData

    try{
    group = await Group.findById(req.params.groupId)
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))

    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))


    if(group.status.toLowerCase() === 'p' || (group.status.toLowerCase() === 'r' && (admins.indexOf(userData.userId) !== -1 ||members.indexOf(userData.userId) !== -1 || (group.owner.equals(userData.userId)))))
    {
        group = await group.populate('discussions.discussion').execPopulate()             
        discussionsTitles = group.discussions.map((discussion)=>{
            return discussion.discussion.title
        })

        return res.send({
            "number":discussionsTitles.length,
            discussionsTitles
        })
    }
    res.status(414).send({
        Message:"you are not authorized to view discussion"
    })
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/group/discussions/:groupId',checkAuth,async(req,res)=>{
    userData = req.userData
    try{
    group = await Group.findById(req.params.groupId)
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))

    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))


    if( (admins.indexOf(userData.userId) !== -1 ||members.indexOf(userData.userId) !== -1 || (group.owner.equals(userData.userId)))){
        
        discussion = new Discussion({
            owner:ObjectID(userData.userId),
            title:req.body.title,
            description:req.body.description,
            group:ObjectID(req.params.groupId)
        })
        await discussion.save()
        disc = {
            discussion:discussion._id
        }
        group.discussions.push(disc)
        await group.save()
        return res.send({
            message:"Created",
            id:disc.discussion
        })

    }
    res.status(414).send({
        Message:"you are not authorized to view discussion"
    })
    }catch(e){
        res.status(400).send(e)
    }

})


router.delete('/group/discussions',checkAuth,async(req,res)=>{
    userData = req.userData
    try{
    group = await Group.findById(req.body.groupId)
    
    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))
    discussion = await Discussion.findById(req.body.discussionId)
    if( (admins.indexOf(userData.userId) !== -1 ||discussion.owner.equals(userData.userId) || (group.owner.equals(userData.userId)))){
        discussions = await Promise.all(group.discussions.map((discussion)=>{
            return  discussion.discussion.toString()
        }))

        group.discussions.splice(discussions.indexOf(discussion._id.toString()),1)

        await group.save()
        
        await discussion.remove()
        
        return res.send({
            message:"Deleted"
        })

    }
    res.status(414).send({
        Message:"you are not authorized to delete discussion"
    })
    }catch(e){
        res.status(400).send(e)
    }
})



router.get('/group/discussions/title/:groupId',checkAuth,async(req,res)=>{
    
    userData = req.userData

    try{
    group = await Group.findById(req.params.groupId)
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))

    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))


    if(group.status.toLowerCase() === 'p' || (group.status.toLowerCase() === 'r' && (admins.indexOf(userData.userId) !== -1 ||members.indexOf(userData.userId) !== -1 || (group.owner.equals(userData.userId)))))
    {

        group = await group.populate('discussions.discussion').execPopulate()
        //console.log(group)        
        discussionsTitles = group.discussions.map((discussion)=>{
            return discussion.discussion
        })

        return res.send({
            "discussionsTitles":discussionsTitles[0]
        })
    }
    res.status(414).send({
        Message:"you are not authorized to view discussion"
    })
    }catch(e){
        res.status(400).send(e)
    }
})



module.exports = router