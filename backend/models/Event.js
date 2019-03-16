module.exports = function (sequelize, DataTypes) {
  let Event = sequelize.define('Event', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING, //Event Title will describing the event
      allowNull: false
    },
    creator: {
      type: DataTypes.STRING, // User who created the Event by user ID of the Creator
      allowNull: false
    },
    location: {
      type: DataTypes.STRING, // If Location has a title (SunTrust Park) will be saved as a text title.
      allowNull: true
    },
    attending: {
      type: DataTypes.JSON, //users that are attending this event
      allowNull: false,
      defaultValue: {
        users: []
      }
    },
    start: {
      type: DataTypes.STRING, //will save as a UNIX timestamp for start date and start time together
      allowNull: true
    },
    end: {
      type: DataTypes.STRING, //will save as a UNIX timestamp for start date and start time together
      allowNull: true
    }
  })

  return Event;
};
