module.exports = function (sequelize, DataTypes) {
  let Niche = sequelize.define('Niche', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    events: {
      type: Sequelize.JSON, // will contain links to the various events in a niche
      allowNull: false,
      defaultValue: {
        posts: []
      }
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
