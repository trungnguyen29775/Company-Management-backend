const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Contract = sequelize.define(
        'contract',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            deduction_percentage: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            payment_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return Contract;
};
