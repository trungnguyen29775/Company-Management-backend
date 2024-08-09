const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const NhanVienDuAn = sequelize.define(
        'nhan_vien_du_an',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            vai_tro: {
                type: DataTypes.ENUM('chinh', 'ho_tro', 'sale', 'quan_ly_du_an'),
                allowNull: false,
            },
            trang_thai_luong: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: true,
        },
    );
    return NhanVienDuAn;
};
