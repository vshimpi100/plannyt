module.exports = function (sequelize, DataTypes) {
  let Event = sequelize.define('Event', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING, //will store event image as a link
      allowNull: true
    },
    poster: {
      type: Sequelize.STRING, //will be the user ID of the poster
      allowNull: false
    },
    niche: {
      type: Sequelize.STRING, //will be the niche where it's posted
      allowNull: false,
      defaultValue: 'all'
    },
    score: {
      type: Sequelize.INTEGER, //sum of down and up votes
      allowNull: false,
      defaultValue: 0
    },
    follows: {
      type: Sequelize.JSON, //users that are following this event
      allowNull: false,
      defaultValue: {
        followers = []
      }
    },
    start: {
      type: Sequelize.STRING, //will save as a UNIX timestamp for start date and start time together
      allowNull: true
    },
    end: {
      type: Sequelize.STRING, //will save as a UNIX timestamp for start date and start time together
      allowNull: true
    },
    price: {
      type: Sequelize.DECIMAL(12,2),
      allowNull: true
    },
    comments: {
      type: Sequelize.JSON, //will contain an object of comment objects, defined by key
      allowNull: false,
      defaultValue: {
          0: "There are no comments here"
      }
    }
  })

  return Event;
};
