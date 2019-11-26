const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.hasMany(models.Messages, { foreignKey: 'user_id', as: 'message_user' });
    this.hasMany(models.Messages, { foreignKey: 'other_user_id', as: 'message_other_user' });
  }
}

module.exports = User;
