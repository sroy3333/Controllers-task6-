const express = require('express');
const router = express.Router();
const contactuscontroller = require('../controllers/contactus'); 


router.get('/contactus', contactuscontroller);

router.post('/contactus', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;