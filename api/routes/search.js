const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Album = require('../models/album');
const User=require('../models/user');
const Photos = require('../models/photos');
const Search = require('../models/search');
const Group = require('../models/group');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;




// searching for album

router.get('/album',(req, res, next) => {
let  term   = req.body.name;

//term = term.toLowerCase();

Album.find( { name : {$regex: term, $options: '$i' }})

 //.then(Album => res.render ('Album', { Album }))
 .then(docs =>{
    const response = {
        count :docs.length,
        album: docs.map(doc => {
            return {
                album: doc
            };
        })
    }
    res.status(200).json(response);
})
 
 
 .catch(err => {
     console.log(err);
     res.status(404).json({ message: "There is no album by that name"});
 });
});





// searching for photo

router.get('/photo',(req, res, next) => {
    let  term   = req.body.name;
    
    
    Photos.find( { title : {$regex: term, $options: '$i' }}) 
    
    .then(docs =>{
        const response = {
            count :docs.length,
            photos: docs.map(doc => {
                return {
                    photos: doc
                };
            })
        }
        res.status(200).json(response);
    })
     
     
     .catch(err => {
         console.log(err);
         res.status(404).json({ message: "There is no photo by that name"});
     });
    });



// searching for user

router.get('/user',(req, res, next) => {
    let  term   = req.body.firstName;
    let  term2   = req.body.secondName;    
    
    User.find( { firstName : {$regex: term, $options: '$i' } } ||  { secondName : {$regex: term2, $options: '$i' }} ) 

    .then(docs =>{
        const response = {
            count :docs.length,
            user: docs.map(doc => {
                return {
                    user: doc
                };
            })
        }
        res.status(200).json(response);
    })
     
    .catch(err => {
         console.log(err);
         res.status(404).json({ message: "There is no user by that name"});
     });
    });





// searching for group

    router.get('/group',(req, res, next) => {
        let  term   = req.body.name;
        
        
        Group.find( { name : {$regex: term, $options: '$i' }})
    
        .then(docs =>{
            const response = {
                count :docs.length,
                group: docs.map(doc => {
                    return {
                        group: doc
                    };
                })
            }
            res.status(200).json(response);
        })
         
         
         .catch(err => {
             console.log(err);
             res.status(404).json({ message: "There is no group by that name"});
         });
        });

module.exports = router;