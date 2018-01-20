const { Subject, Topic } = require('./index');
const { warnings, errors } = require('../utils/messages');

module.exports = {
  async getAll(subjectId) {
    let topics = [];
    try {
      const subject = await Subject.findById(subjectId);
      topics = await subject.getTopics();
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', data: topics };
  },

  async getOne(id) {
    let topic = {};
    try {
      topic = await Topic.findById(id);
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', data: topic };
  },

  async add(newTopic) {
    const { subjectId } = newTopic;
    try {
      const topic = await Topic.create(newTopic);
      const subject = await Subject.findById(subjectId);
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
