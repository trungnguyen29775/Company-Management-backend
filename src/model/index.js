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
db.Service = require('./service.model')(sequelize, Sequelize);
db.DoiTac = require('./businessPartner.model')(sequelize, Sequelize);
db.HopDong = require('./contract.model')(sequelize, Sequelize);
db.NhanVien = require('./projectMember.model')(sequelize, Sequelize);
db.Project = require('./project.model')(sequelize, Sequelize);
// --------------------------------Relation----------------------------
// Nhan vien
db.NhanVien.belongsTo(db.Users, {
    foreignKey: 'id_user',
});

db.Users.hasMany(db.NhanVien, {
    foreignKey: 'id_user',
});
// Du An

db.NhanVien.belongsTo(db.Project, {
    foreignKey: 'id_project',
});

db.Project.hasMany(db.NhanVien, {
    foreignKey: 'id_project',
});

// Doi tac
db.Project.belongsTo(db.DoiTac, {
    foreignKey: 'id_business_partner',
});

db.DoiTac.hasMany(db.Project, {
    foreignKey: 'id_business_partner',
});
// hop dong
db.HopDong.belongsTo(db.Project, {
    foreignKey: 'id_project',
});

db.Project.hasMany(db.HopDong, {
    foreignKey: 'id_project',
});

// dich vu
db.Service.belongsTo(db.Project, {
    foreignKey: 'id_project',
});

db.Project.hasMany(db.Service, {
    foreignKey: 'id_project',
});

module.exports = db;
