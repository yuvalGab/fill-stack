const { Topic, Resource } = require('./index');
const { warnings, errors } = require('../utils/messages');

module.exports = {
  async getAll(topicId) {
    let resources = [];
    try {
      resources = await Resource.findAll({ where: { topicId }});
    } catch (error) {
      return { error: errors['server_error'] };
    }

    return { error: '', data: resources };
  },

  async add(newResource) {
    const { topicId } = newResource;
    try {
      const resource = await Resource.create(newResource);
      const topic = await Topic.findById(topicId);
      await topic.addTopic(resource);
    } catch (error) {
      return { error: errors['server_error'] };
    }
    
    return { error: '' };
  },

  async delete(id) {
   try {
     const resource = await Resource.findById(id);
     await resource.destroy();
   } catch (error) {
    return { error: errors['server_error'] };
   }

   return { error: '' };
  }
};
