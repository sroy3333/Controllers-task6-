const path = require('path');
const routeDir = require('../util/path')


const admincontroller = (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'add-product.html'));
};

module.exports = admincontroller;