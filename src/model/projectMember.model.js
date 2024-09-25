const { DataTypes, DATE } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const ProjectMember = sequelize.define(
        'project_member',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            role: {
                type: DataTypes.ENUM('main_member', 'support', 'sale', 'leader'),
                allowNull: false,
            },
            salaryStatus: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            timestamps: true,
        },
    );
    return ProjectMember;
};
