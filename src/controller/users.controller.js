module.exports = (app) => {
    const UsersService = require('../service/user.service');
    var router = require('express').Router();
    router.post('/login', UsersService.authenticate);
    router.post('/create-new-member', UsersService.create);
    router.post('/get-admin-member', UsersService.getAll);
    router.post('/update-member', UsersService.update);
    app.use('/', router);
};
