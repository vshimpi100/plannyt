module.exports = function (sequelize, DataTypes) {
  let Niche = sequelize.define('Niche', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    details: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    events: {
      type: Sequelize.JSON, // will contain links to the various events in a niche
      allowNull: false,
      defaultValue: {
        posts: []
      }
    },
    owner: {
      type: Sequelize.STRING, // User who creates/owns the Niche.
      allowNull: false,
    },
    isPrivate: {
      type: Sequelize.BOOLEAN, // This sets whether the Niche can be joined by anyone, or requires approval by Niche owner.
      allowNull: false,
      defaultValue: false
    },
    follows: {
      type: Sequelize.JSON, // will contain all users that follow the niche
      allowNull: false,
      defaultValue: {
        followers = []
      }
    }
  })

  return Niche;
};
