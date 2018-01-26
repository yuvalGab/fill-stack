const { User, Subject, Topic } = require('./index');
const { warnings, errors} = require('../utils/messages');
const initialContent = require('../utils/initialContent');
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
  async create(newUser) {
    const { username, password } = newUser
    try {
      const existUser = await User.findAll({ where: { username }});
      if (existUser.length) {
        return warnings['user_exist'];
      }

      bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hashedPassword) => {
          const user = await User.create({ ...newUser, password: hashedPassword});
          
          initialContent.forEach(async (c) => {
            const subject = await Subject.create(c.subject);
            await user.addSubject(subject);

            c.topics.forEach(async (t) => {
              const topic = await Topic.create(t);
              await subject.addTopic(topic);
            });
          });
        });
      });
    } catch (error) {
      return errors['server_error'];
    }

    return '';
  },

  async login({ username, password }) {
    try {
      const user = await User.findOne({ where: { username }});
      if (!user) {
        return { error: warnings['login_faild'] };
      }
    
      const res = await bcrypt.compare(password, user.password); 
      if (!res) {
        return { error: warnings['login_faild'] };
      }

      return { error: '', userId: user.id };
    } catch (error) {
      return { error: errors['server_error'] };
    }
  },

  async getFullName(userId) {
    let user;
    try {
      user = await User.findById(userId);
    } catch (error) {
      return { error: errors['server_error'] };
    }

    if (user) {
      return { error: '', fullName: user.fullName };
    } else {
      return { error: warnings['no_full_name'] };
    }
  }
};
