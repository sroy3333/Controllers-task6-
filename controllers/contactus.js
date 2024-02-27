const path = require('path');
const routeDir = require('../util/path');


const contactuscontroller = (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'contactus.html'));
};

module.exports = contactuscontroller;