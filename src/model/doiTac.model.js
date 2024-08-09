const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const DoiTac = sequelize.define(
        'doi_tac',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            so_dien_thoai: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: true,
        },
    );
    return DoiTac;
};
