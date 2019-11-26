const { Model, DataTypes } = require('sequelize');

class Messages extends Model {
  static init(connection) {
    super.init(
      {
        text: DataTypes.STRING,
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'other_user_id', as: 'other_user' });
  }
}

module.exports = Messages;
