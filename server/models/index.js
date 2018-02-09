const db = require('../utils/db');
const Sequelize = require('sequelize');

const User = db.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Subject = db.define('subjects', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  importance: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  control: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1   
  }               
});

const Topic = db.define('topics', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  importance: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  control: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1   
  },  
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  }                 
});

const Resource = db.define('resources', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  link: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  }     
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