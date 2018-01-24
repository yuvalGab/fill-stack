const { User, Subject } = require('./index');
const { warnings, errors } = require('../utils/messages');

module.exports = {
  async getAll(userId, zone) {
    let subjects = [];
    try {
      subjects = await Subject.findAll({ where: { userId, zone }});
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', data: subjects };
  },

  async getTitle(id) {
    let subject;
    try {
      subject = await Subject.findById(id);
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', title: subject.title };
  },

  async add(userId, newSubject) {
    try {
      const subject = await Subject.create(newSubject);
      const user = await User.findById(userId);
      await user.addSubject(subject);
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '' };
  },

  async edit({ id, subjectDetails }) {
    try {
      const subject = await Subject.findById(id);
      await subject.update(subjectDetails);
    } catch (error) {
      return { error: errors['server_error'] };
    }
  
    return { error: '' };
  },

  async delete(id) {
    try {
      const subject = await Subject.findById(id);
      await subject.destroy();
    } catch (error) {
      return { error: errors['server_error'] };
    }
  
    return { error: '' };
  }
};