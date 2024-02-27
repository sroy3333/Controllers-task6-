const path = require('path');
const routeDir = require('../util/path')

const successcontroller = (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'successpage.html'));
};

module.exports = successcontroller;