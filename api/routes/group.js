const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const User=require('../models/user');
const { ObjectID } = require('mongodb');
const Photo = require('../models/photos');
const checkAuth = require('../middleware/check-auth');
const Discussion = require('../models/discussion')
const photos = require('../models/photos');
//const group = require('../models/group');






router.post('/groups',checkAuth,async (req,res) => {

    userData = req.userData

    group = new Group({
        name:req.body.groupName,
        description:req.body.groupDescription,
        owner:ObjectID(userData.userId),
        status:req.body.status
    })

    try{

        
/*    member = {
        member:ObjectID(userData.userId)
    }   
    group.members.push(member) 
*/
    await group.save()


    //group = await group.save()
    res.send({
        GroupID:group._id
    })


    }catch(e){
        res.status(400).send(e)
    }
})


router.delete('/groups',checkAuth,async (req,res) =>{
    userData = req.userData

    try{
        group = await Group.findById(req.body.groupId)

        if(!group.owner.equals(userData.userId)){
            return res.status(414).send({
                message:"You are not the group owner"
            })
        }

        ids = group.discussions.map((discussion)=>{
            return discussion.discussion
        })
        console.log(ids)
        await Discussion.deleteMany({_id: { $in: ids}})
    

        await group.remove()
        res.send({
            status:"1"
        })
    }catch(e){
        res.status(400).send(e)
    }
})


router.put('/groups',checkAuth,async (req,res) =>{
    userData = req.userData

    try{

        group = await Group.findById(req.body.groupId)
        if(!group.owner.equals(userData.userId)){ 
            return res.status(414).send({
            message:"You are not the group owner"
            })
        }
        group.name = req.body.groupName == null ? group.name : req.body.groupName
        group.description = req.body.groupDescription == null ? group.description : req.body.groupDescription
        group.status = req.body.status == null ? group.status : req.body.status
        group.age_restricted = req.body.age_restricted == null ? group.age_restricted : req.body.age_restricted
        //Date can't be modified
        await group.save()
        res.status(400).send({
            message:"Updated"
        })
        
    }catch(e){
        res.status(400).send(e)
    }
})
//join Group
router.post('/groups/:groupId',checkAuth,async (req,res) => {


    userData = req.userData
    
    try{
    user = await User.findById(userData.userId)
    
    group = await Group.findById(req.params.groupId)
    if(group.status.toLowerCase()==='r' || (user.age < group.age_restricted)){

        return  res.status(414).send({
        message:"You are not authorized to join thins group"
    })
    }

    member = {
        member:ObjectID(userData.userId)
    }
    

    // needs to check if the user is already joined
    check = group.members.some(objectMember => {
        return objectMember.member.equals(userData.userId)
    });
    if(check){
        return res.status(406).send({
            message:"user is already in the group"
        })
    }
    check = group.admins.some(objectAdmin => {
        return objectAdmin.admin.equals(userData.userId)
    });
    if(check){
        return res.status(406).send({
            message:"user is already in the group"
        })
    }
    if(group.owner.equals(userData.userId)){
        return res.status(414).send({
            message:"you are the owner of the group"
        })
    }

    group.members.push(member)
    await group.save()
    res.send({
        message:"joined"
    })

    }catch(e){
        res.status(400).send(e)
    }
})

//leave Group
router.delete('/groups/:groupId',checkAuth,async (req,res) => {

    userData = req.userData
    user = await User.findById(userData.userId)
    try{
    group = await Group.findById(req.params.groupId)

    if(group.owner.equals(userData.userId)){
        return  res.status(414).send({
         message:"owner can't leave the group"
         })
     }
    // needs to check if the user is already joined
    check = group.members.some(objectMember => {
        return objectMember.member.equals(userData.userId)
    });

    if(!check){
        return res.status(406).send({
            message:"user isn't a member in the group"
        })
    }


    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))

    group.members.splice(members.indexOf(userData.userId),1)

    await group.save()
    res.send({
        message:"Leaved"
    })

    }catch(e){
        res.status(400).send(e)
    }
})


//assumption owner,admin or members only can upload photo for group
//photo is already uploaded and needs to be assigned with the group
//needs to be checked after uploading a photo

router.post('/groups/photos/addphoto',checkAuth,async (req,res) => {
    userData = req.userData
    //////////////////

    try{

    group = await Group.findById(req.body.groupId)
    members = group.members.map((member)=>{
        return  member.member.toString()
    })


    admins = group.admins.map((admin)=>{
        return  admin.admin.toString()
    })


    if((!group.owner.equals(userData.userId)) && (members.indexOf(userData.userId) === -1) && (admins.indexOf(userData.userId) === -1)){
        return res.status(414).send({
            message:"you aren't authorized to add photo to group"
        })
    }
    
    photo = await Photo.findById(req.body.photoID)
    
    photo1 = {
        Photo:ObjectID(req.body.photoID)
    }
    console.log("photo")
    group.photos.push(photo1)
    
    await group.save()
    res.send({
        message:"photo added"
    })

    }catch(e){
        res.status(400).send(e)
    }
})
//list members
router.get('/group/members/:groupId',(checkAuth),async(req,res)=>{
    userData = req.userData
    try{
    group = await Group.findById(req.params.groupId)
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))
    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))
    //checking if the user is already in the group
    if(group.status.toLowerCase() === 'p' || (group.status.toLowerCase() === 'r' && (admins.indexOf(userData.userId) !== -1 ||members.indexOf(userData.userId) !== -1 || (group.owner.equals(userData.userId)))))
    {
        ids = []
        group = await group.populate('members.member').execPopulate()
        members =  group.members.map(member => {
            ids.push(member.member._id)
            return member.member.firstName+" "+member.member.secondName
        });
        return res.send({
            "MembersNumber":members.length,
            "Names":members,
            "ID's":ids
          })
    }
    res.status(414).send({
        message:"you are not authorized to see the group members"
    })
    }catch(e){
        res.status(400).send(e)
    }

})
//list all admins
router.get('/group/admins/:groupId',(checkAuth),async(req,res)=>{
    userData = req.userData
    try{
    group = await Group.findById(req.params.groupId)
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))
    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))
    //checking if the user is already in the group
    if(group.status.toLowerCase() === 'p' || (group.status.toLowerCase() === 'r' && (admins.indexOf(userData.userId) !== -1 ||members.indexOf(userData.userId) !== -1 || (group.owner.equals(userData.userId)))))
    {
        ids = []
        group = await group.populate('admins.admin').execPopulate()
        admins =  group.admins.map(admin => {
            ids.push(admin.admin._id)

            return admin.admin.firstName+" "+admin.admin.secondName
        });
        return res.send({
            "adminsNumber":admins.length,
            "Names":admins,
            "ID's":ids
          })
    }
    res.status(414).send({
        message:"you are not authorized to see the group admins"
    })
    }catch(e){
        res.status(400).send(e)
    }

})




router.get('/group/photos/:groupId',(checkAuth),async(req,res)=>{
    userData = req.userData
    try{
    group = await Group.findById(req.params.groupId)
    members = await Promise.all(group.members.map((member)=>{
        return  member.member.toString()
    }))
    admins = await Promise.all(group.admins.map((admin)=>{
        return  admin.admin.toString()
    }))
    //checking if the user is already in the group
    if(group.status.toLowerCase() === 'p' || (group.status.toLowerCase() === 'r' && (admins.indexOf(userData.userId) !== -1 ||members.indexOf(userData.userId) !== -1 || (group.owner.equals(userData.userId)))))
    {
        const photos = group.photos.map((photo)=>{
            return photo.Photo
        })
        return res.send(photos)
    }
    res.status(414).send({
        message:"you are not authorized to see the group photos"
    })
    }catch(e){
        res.status(400).send(e)
    }

})

module.exports = router