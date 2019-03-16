module.exports = function (sequelize, DataTypes) {
  let Event = sequelize.define('Event', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING, //Event Title will describing the event
      allowNull: false
    },
    creator: {
      type: Sequelize.STRING, // User who created the Event by user ID of the Creator
      allowNull: false
    },
    location: {
      type: Sequelize.STRING, // If Location has a title (SunTrust Park) will be saved as a text title.
      allowNull: true
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
    }
  })

  return Event;
};
