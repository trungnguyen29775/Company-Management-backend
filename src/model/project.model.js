const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define(
        'project',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            package: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            totalCost: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            until: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return Project;
};
