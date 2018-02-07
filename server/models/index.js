const db = require('../utils/db');
const Sequelize = require('sequelize');

const User = db.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.TEXT,
  email: Sequelize.STRING,
  fullName: Sequelize.STRING
});

const Subject = db.define('subjects', {
  title: Sequelize.STRING,
  zone: Sequelize.STRING,
  importance: Sequelize.INTEGER,
  control: Sequelize.INTEGER                 
});

const Topic = db.define('topics', {
  title: Sequelize.STRING,
  importance: Sequelize.INTEGER,
  control: Sequelize.INTEGER,
  description: Sequelize.TEXT                 
});

const Resource = db.define('resources', {
  title: Sequelize.STRING,
  link: Sequelize.TEXT,
  type: Sequelize.STRING     
});

User.hasMany(Subject, { as: 'Subjects' });
Subject.belongsTo(User, { foreignKey: 'userId' });

Subject.hasMany(Topic, { as: 'Topics' });
Topic.belongsTo(Subject, { foreignKey: 'subjectId' });

Topic.hasMany(Resource, { as: 'Resources'});
Resource.belongsTo(Topic, { foreignKey: 'topicId' });

(async () => {
  await User.sync();
  await Subject.sync();
  await Topic.sync();
  await Resource.sync();
})();

module.exports = {
  User,
  Subject,
  Topic,
  Resource
}