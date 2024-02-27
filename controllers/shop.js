const path = require('path');
const routeDir = require('../util/path')

const shopcontroller = (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'shop.html'));
}

module.exports = shopcontroller;