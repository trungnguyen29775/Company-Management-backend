const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const BusinessPartner = sequelize.define(
        'business_partner',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: true,
        },
    );
    return BusinessPartner;
};
