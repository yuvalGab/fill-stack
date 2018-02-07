const { Subject, Topic } = require('./index');
const { warnings, errors } = require('../utils/messages');

module.exports = {
  async getAll(userId, subjectId) {
    let topics = [];
    try {
      topics = await Topic.findAll({ include: { model: Subject, where: { userId }}, where: { subjectId }});
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', data: topics };
  },

  async getOne(userId, id) {
    let topic = {};
    try {
      topic = await Topic.findOne({ include: { model: Subject, where: { userId }}, where: { id }});
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', data: topic };
  },

  async add(userId, newTopic) {
    const { subjectId } = newTopic;
    try {
      const topic = await Topic.create(newTopic);
      const subject = await Subject.findOne({ where: { userId, id: subjectId }});
      await subject.addTopic(topic);
    } catch (error) {
      return { error: errors['server_error'] };
    }
    
    return { error: '' };
  },

  async edit({id, topicDetails}) {
    try {
      const topic = await Topic.findById(id);
      await topic.update(topicDetails);
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '' };
  },

  async delete(id) {
   try {
     const topic = await Topic.findById(id);
     await topic.destroy();
   } catch (error) {
    return { error: errors['server_error'] };
   }

   return { error: '' };
  }
};
