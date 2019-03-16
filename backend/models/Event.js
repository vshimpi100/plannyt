module.exports = function (sequelize, DataTypes) {
  let Event = sequelize.define('Event', {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: sequelize.STRING, //Event Title will describing the event
      allowNull: false
    },
    creator: {
      type: sequelize.STRING, // User who created the Event by user ID of the Creator
      allowNull: false
    },
    location: {
      type: sequelize.STRING, // If Location has a title (SunTrust Park) will be saved as a text title.
      allowNull: true
    },
    attending: {
      type: sequelize.JSON, //users that are attending this event
      allowNull: false,
      defaultValue: {
        // users = []
      }
    },
    start: {
      type: sequelize.STRING, //will save as a UNIX timestamp for start date and start time together
      allowNull: true
    },
    end: {
      type: sequelize.STRING, //will save as a UNIX timestamp for start date and start time together
      allowNull: true
    }
  })

  return Event;
};
