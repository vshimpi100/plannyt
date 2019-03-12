module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define('User', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
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
    phone: {
      type: Sequelize.INTEGER, //because we are storing phone number as an integer we will need to remove the "-"
      allowNull: true
    },
    social: {
      type: Sequelize.JSON, // will contain igLink, fbLink, twLink, pinLink
      allowNull: false,
      defaultValue: {
        igLink = '',
        fbLink = '',
        twLink = '',
        pinLink = ''
      }
    },
    interactions: {
      type: Sequelize.JSON, //will contain posts, events, friends, and niches as arrays
      allowNull: false,
      defaultValue: {
        posts = [],
        events = [],
        friends = [],
        niches = ['all']
      }
    }
  })

  return User;
};
