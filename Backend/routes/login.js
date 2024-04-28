const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const loginmodel=require('../schema/loginschema');
const { MongoClient } = require('mongodb');
router.get('/', async (req, res) => {
    try {
        // Retrieve query parameters
        const { name, pwd, email } = req.query;

        // Construct query object
        const query = {
            name: name,
            pwd: pwd,
            email: email
        };

        // Find user in the database
        const user = await loginmodel.findOne(query);

        if (user) {
            // User found, send success response
            res.json({ message: 'User found', userid: user._id });
        } else {
            // User not found, send failure response
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        // Handle errors
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/',async (req,res)=>
{
   try {
    console.log(JSON.stringify(req.body));
    const user=req.body;
    let newuser=new loginmodel({
        name:user.name,
        email:user.email,
        pwd:user.pwd,
    });
    const result = await newuser.save();
    console.log(JSON.stringify(result));
    var userId = loginmodel.findOne({ username: query.name })._id;
    res.send(JSON.stringify(result,userId));
    
   } catch (error) {
    console.log(error);
   }
});
module.exports=router;