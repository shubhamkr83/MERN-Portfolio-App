const express = require('express');
const router = express.Router();
const app = express();


require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});


//---------------- Contact Us ----------------

router.post('/contact', async (req, res) => {

    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {

        return res.status(422).json({ error: "Plz fill all the fields" });

    } try {

        const userExists = await User.findOne({ email: email });

        if (userExists) {

            return res.status(422).json({ error: "Email already exists" });

        } else {

            const user = new User({ name, email, phone, message });

            //------ here password hashing is implemented (see userSchema.js file) -------

            await user.save();

            res.status(201).json({ message: "Thanks for contacting us 😀" });

        }

    } catch (err) {
        console.log(err);
    }


});

module.exports = router;