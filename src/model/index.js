const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require('./users.model')(sequelize, Sequelize);
db.DichVu = require('./dichVu.model')(sequelize, Sequelize);
db.DoiTac = require('./doiTac.model')(sequelize, Sequelize);
db.HopDong = require('./hopDong.model')(sequelize, Sequelize);
db.NhanVien = require('./nhanVienDuAn.model')(sequelize, Sequelize);
db.DuAn = require('./duAn.model')(sequelize, Sequelize);
// --------------------------------Relation----------------------------
// Nhan vien
db.NhanVien.belongsTo(db.Users, {
    foreignKey: 'id_user',
});

db.Users.hasMany(db.NhanVien, {
    foreignKey: 'id_user',
});
// Du An

db.NhanVien.belongsTo(db.DuAn, {
    foreignKey: 'id_du_an',
});

db.DuAn.hasMany(db.NhanVien, {
    foreignKey: 'id_du_an',
});

// Doi tac
db.DuAn.belongsTo(db.DoiTac, {
    foreignKey: 'id_doi_tac',
});

db.DoiTac.hasMany(db.DuAn, {
    foreignKey: 'id_doi_tac',
});
// hop dong
db.HopDong.belongsTo(db.DuAn, {
    foreignKey: 'id_du_an',
});

db.DuAn.hasMany(db.HopDong, {
    foreignKey: 'id_du_an',
});

// dich vu
db.DichVu.belongsTo(db.DuAn, {
    foreignKey: 'id_du_an',
});

db.DuAn.hasMany(db.DichVu, {
    foreignKey: 'id_du_an',
});

module.exports = db;
