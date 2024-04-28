const express=require('express');
const router=express.Router();
const bookingmodel=require('../schema/bookingschema');
const loginmodel=require('../schema/loginschema');
router.post('/',async (req,res)=>
{
   try {
    console.log(JSON.stringify(req.body));
    const user=req.body;
    //var userid;
    console.log;(user.name);
    //const query={name:user.name}
    //const id = await loginmodel.findOne(query);

    // if (id) {
    //    console.log(id._id);
    //    userid=id._id;
    // } else {
    //     res.status(404).json({ message: 'User not found' });
    // }

    var seats=JSON.stringify(user.seats);
    let newuser=new bookingmodel({
        name:user.name,
        movie:user.movie,
        theatre:user.theatre,
        showtime:user.showtime,
        date:user.date,
        seats:seats,
        count:user.count,
    });
    const result = await newuser.save();
    //console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
   } catch (error) {
    console.log(error);
   }
});
router.get('/', async (req, res) => {
    try {
        // Retrieve query parameters
        const {name} = req.query;

        // Construct query object
        const query = {
            name: name,
        };
        // Find user in the database
        const user = await bookingmodel.findOne(query);
        if (user) {
            res.json({ message: 'User found', userid: user._id,'movie':user.movie,'theatre':user.theatre,'showtime':user.showtime,'date':user.date,'seats':user.seats,'count':user.count});
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        // Handle errors
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=router;