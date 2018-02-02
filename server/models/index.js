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
  control: Sequelize.INTEGER,
  userId: Sequelize.INTEGER                   
});

const Topic = db.define('topics', {
  title: Sequelize.STRING,
  importance: Sequelize.INTEGER,
  control: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  subjectId: Sequelize.INTEGER                   
});

const Resource = db.define('resources', {
  title: Sequelize.STRING,
  link: Sequelize.TEXT,
  type: Sequelize.STRING,
  topicId: Sequelize.INTEGER                
});

User.hasMany(Subject, { as: 'Subjects' });

Subject.hasMany(Topic, { as: 'Topics' });

Topic.hasMany(Resource, { as: 'Resources'});

User.sync();
Subject.sync();
Topic.sync();
Resource.sync();

module.exports = {
  User,
  Subject,
  Topic,
  Resource
}