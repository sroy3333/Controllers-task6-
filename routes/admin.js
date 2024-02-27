const express = require('express');
const router = express.Router();
const admincontroller = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', admincontroller);

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;