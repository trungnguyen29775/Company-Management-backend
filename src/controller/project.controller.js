module.exports = (app) => {
    const ProjectService = require('../service/project.service');
    var router = require('express').Router();
    router.post('/get-admin-project', ProjectService.getAll);

    app.use('/', router);
};
