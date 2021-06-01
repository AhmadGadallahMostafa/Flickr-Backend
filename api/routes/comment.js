const express = require('express');
const router = express.Router();
const Group = require('../models/group');
const { ObjectID } = require('mongodb');
const checkAuth = require('../middleware/check-auth');
const User=require('../models/user');
const Photo = require('../models/photos');
const Comment = require('../models/comment')

router.post('/photo/comments/:photoId',checkAuth,async(req,res)=>{
    try{
    photo = await Photo.findById(req.params.photoId)
    
    comment = new Comment({
        user:ObjectID(req.userData.userId),
        photo:ObjectID(req.params.photoId),
        text:req.body.text
    })
    await comment.save()
    photo.comments.push({
        comment:ObjectID(comment._id)
    })
    await photo.save()
    res.send({
        message:"commented",
        id:comment._id
    })
    }catch(r){
        res.status(400).send(e)
    }
})


router.put('/photo/comments/:photoId',checkAuth,async(req,res)=>{
    try{

    photo = await Photo.findById(req.params.photoId)
    comment = await Comment.findById(req.body.commentId)
    if(!comment.user.equals(req.userData.userId))
    return res.status(414).send({
        message:"You can't edit others comments"
    })
    comment.text = req.body.text == null ? comment.text : req.body.text
    await comment.save()
    res.send({
        message:"edited",
        id:comment._id
    })
    }catch(e){
        res.status(400).send(e)
    }
})

//In photo module all comments should be deleted by deleting the photo
router.delete('/photo/comments/:photoId',checkAuth,async(req,res)=>{
    try{

    photo = await Photo.findById(req.params.photoId)
    console.log(photo)
    comment = await Comment.findById(req.body.commentId)
    if(!comment.user.equals(req.userData.userId))
    return res.status(414).send({
        message:"You can't delete others comments"
    })

    comments = photo.comments.map((comment)=>{
        console.log(comment)
        return  comment.comment.toString()
    })
    console.log(comments)

    photo.comments.splice(comments.indexOf(comment._id),1)

    await photo.save()
    
    await comment.remove()
    res.send({
        message:"deleted",
    })
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router