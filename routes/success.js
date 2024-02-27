const express = require('express');
const router = express.Router();
const successcontroller = require('../controllers/success');

router.get('/successpage', successcontroller);


router.post('/successpage', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success/successpage');
});

module.exports = router;