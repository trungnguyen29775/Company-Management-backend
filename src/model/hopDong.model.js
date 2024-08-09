const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const HopDong = sequelize.define(
        'hop_dong',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            so_hd: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phan_tram_khau_tru: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            trang_thai: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            ngay_thanh_toan: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            timestamps: true,
        },
    );
    return HopDong;
};
