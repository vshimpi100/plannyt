module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING, //will store user image as a link
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    friends: {
      type: Sequelize.JSON,
      allowNull: false,
      defaultValue: {
        list: []
      }
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    }
  })

  return User;
};
