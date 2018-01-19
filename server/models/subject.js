const { User, Subject } = require('./index');
const { warnings, errors} = require('../utils/messages');

module.exports = {
  async getAll(userId, zone) {
    let subjects = [];
    try {
      const user = await User.findById(userId);
      subjects = await user.getSubjects({ where: { zone }});
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', data: subjects };
  },

  async getTitle(subjectId) {
    let subject;
    try {
      subject = await Subject.findById(subjectId);
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', title: subject.title };
  },

  async getZone(subjectId) {
    let zone = '';
    try {
      subject = await Subject.findById(subjectId);
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', zone: subject.zone };
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