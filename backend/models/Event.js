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
    link: {
      type: Sequelize.TEXT, // text link to the event
      allowNull: true
    },
    text: {
      type: Sequelize.TEXT, //text describing the event
      allowNull: true
    },
    poster: {
      type: Sequelize.STRING, //will be the user ID of the poster
      allowNull: false
    },
    location:{
      type: Sequelize.TEXT, //will be saved as a text address
      allowNull: true
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
    tentative: {
      type: Sequelize.JSON, //users that are tentatively going to this event
      allowNull: false,
      defaultValue: {
        users = []
      }
    },
    attending: {
      type: Sequelize.JSON, //users that are attending this event
      allowNull: false,
      defaultValue: {
        users = []
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
