module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
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
  })

  return User;
};
