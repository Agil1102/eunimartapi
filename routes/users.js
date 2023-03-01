const { User, validate } = require('../models/users');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    let UserID = await User.findOne({ email: req.body.userid});
    if (user ){
        return res.status(400).send('That email already exisits!');
    } if(UserID){
        return res.status(400).send('That userID already exisits!');

    }else {
        // Insert the new user if they do not exist yet
        user = new User({
            userid: req.body.userid,
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            age:req.body.age,
            phone: req.body.phone,
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(user);
    }
});

module.exports = router;
 
