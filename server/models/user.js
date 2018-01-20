const { User } = require('./index');
const { warnings, errors} = require('../utils/messages');

module.exports = {
  async create(newUser) {
    try {
      const existUser = await User.findAll({ where: { username: newUser.username }});
      if (existUser.length) {
        return warnings['user_exist'];
      }

      await User.create(newUser);
    } catch (error) {
      return errors['server_error'];
    }

    return '';
  },

  async login({ username, password }) {
    let user;
    try {
      user = await User.findAll({ where: { username, password }});
    } catch (error) {
      return { error: errors['server_error'] };
    }

    if (!user.length) {
      return { error: warnings['login_faild'] };
    } else {
      return { error : '', userId: user[0].id };
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
