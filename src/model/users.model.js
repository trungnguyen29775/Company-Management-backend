const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(
        'users',
        {
            user_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            role: {
                type: DataTypes.ENUM('admin', 'user'),
                allowNull: false,
            },
            mat_khau: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            avt_file_path: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            ten: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dob: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            gia_tri_tich_luy: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return Users;
};
