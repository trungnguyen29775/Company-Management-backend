const db = require('../model');
const { Op, where } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const Users = db.Users;

exports.create = async (req, res) => {
    try {
        const newUserId = uuidv4();
        const newUser = {
            user_id: newUserId,
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            avtFilePath: null,
            dob: req.body.dob,
            role: req.body.role,
            accumulated_value: 0,
        };
        await Users.create(newUser);
        res.status(200).send(req.body);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.authenticate = async (req, res) => {
    Users.findOne({
        where: {
            username: req.body.username,
        },
    })
        .then((result) => {
            const userData = result.dataValues;

            if (userData.password === req.body.password) {
                const responseData = {
                    userId: userData.user_id,
                    name: userData.name,
                    role: userData.role,
                    dob: userData.dob,
                    accumulatedValue: userData.accumulatedValue,
                    avtFilePath: userData.avtFilePath,
                    username: userData.username,
                };
                res.status(200).json({
                    message: 'Authentication successful',
                    userData: responseData,
                });
            } else {
                res.status(401).json({
                    message: 'Authentication failed',
                    error: 'Invalid password',
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving User.',
            });
        });
};

exports.getAll = async (req, res) => {
    if (req.body.username === 'admin') {
        Users.findAll({
            where: {
                username: {
                    [Op.not]: req.body.username,
                },
            },
        })
            .then((result) => {
                const responseData = [];
                result.map((item, index) => {
                    const date = new Date(item.dob);
                    const formatData = {
                        stt: index + 1,
                        name: item.name,
                        username: item.username,
                        role: item.role,
                        avtFilePath: item.avt_file_path,
                        valueProposition: item.accumulated_value,
                        dob: date.toISOString().split('T')[0],
                    };
                    responseData.push(formatData);
                });
                res.status(200).send(responseData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({
                    message: err.message || 'Some error occurred while retrieving User.',
                });
            });
    } else {
        res.status(200).send('Not admin');
    }
};

exports.create = async (req, res) => {
    try {
        const newUserId = uuidv4();
        const newUser = {
            user_id: newUserId,
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            avtFilePath: null,
            dob: req.body.dob,
            role: req.body.role,
            accumulated_value: 0,
        };
        await Users.create(newUser);
        res.status(200).send(req.body);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.update = async (req, res) => {
    try {
        Users.update(
            {
                name: req.body.name,
                dob: req.body.dob,
                password: req.body.password,
                role: req.body.role,
            },
            {
                where: {
                    username: req.body.username,
                },
            },
        ).then((result) => {
            res.status(200).send('Update Complete');
        });
    } catch (err) {
        res.status(500).send('Error due to ', err);
    }
};
