const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const DichVu = sequelize.define(
        'dich_vu',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            ten_dich_vu: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            so_tien: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            noi_dung: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return DichVu;
};
