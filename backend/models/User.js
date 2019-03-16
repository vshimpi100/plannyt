module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING, //will store user image as a link
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    friends: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        list: []
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  })

  return User;
};
