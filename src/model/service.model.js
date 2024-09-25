const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Service = sequelize.define(
        'service',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nameService: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cost: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return Service;
};
