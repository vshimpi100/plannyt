module.exports = function (sequelize, DataTypes) {
  let Event = sequelize.define('Event', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING, // Event Cover Photo - will store event image as a link
      allowNull: true
    },
    link: {
      type: Sequelize.TEXT, // External Sharing text link to the event
      allowNull: true // If external link for tickets.
    },
    title: {
      type: Sequelize.STRING, //Event Title will describing the event
      allowNull: false
    },
    details: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    eventType: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: null
    },
    creator: {
      type: Sequelize.STRING, // User who created the Event by user ID of the Creator
      allowNull: false
    },
    location: {
      type: Sequelize.STRING, // If Location has a title (SunTrust Park) will be saved as a text title.
      allowNull: true
    },
    locationAddress: { 
      type: Sequelize.STRING,
      allowNull: true
    },
    isPrivate: { 
      type: Sequelize.BOOLEAN, // This will set if the event is private or not. Only users invited, or anyone can see and join.
      allowNull: false,
      defaultValue: false
    },
    nicheEvent: { // This by default says any event being created is a Friend Type event. Can select to be a Niche event, then select "What Niche?" after.
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    niche: {
      type: Sequelize.STRING, // If Created Event is a Niche Event, this will be the Niche where it's posted. Disabled & N/A unless nicheEvent = true.
      allowNull: false,
      defaultValue: null
    },
    score: {
      type: Sequelize.INTEGER, //sum of down and up votes  IDEA: This could be used for Niche events only, and the score can be determined as popularity by a combination of "Attending + Tentative".
      allowNull: false,
      defaultValue: 0
    },
    tentative: {
      type: Sequelize.JSON, // users that are tentatively going to this event
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
    createDate: {
      type: Sequelize.STRING, //will save as a UNIX timestamp for creation date
      allowNull: false,
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
