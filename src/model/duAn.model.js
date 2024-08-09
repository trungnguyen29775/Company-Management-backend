const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const DuAn = sequelize.define(
        'du_an',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            ten_du_an: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            noi_dung_du_an: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            goi: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tong_tien: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            den_ngay: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            so_tien_con_lai: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            trang_thai_du_an: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return DuAn;
};
