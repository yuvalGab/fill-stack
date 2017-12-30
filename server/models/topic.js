const topics = [
  {
    id: 0,
    title: 'loops',
    zone: 'client side',
    subject: 1,
    importance: 3,
    control: 2
  },
  {
    id: 1,
    title: 'npm',
    zone: 'server side',
    subject: 2,
    importance: 3,
    control: 1
  },
  {
    id: 2,
    title: 'commit',
    zone: 'both sides',
    subject: 3,
    importance: 2,
    control: 2
  },
  {
    id: 3,
    title: 'images',
    zone: 'both sides',
    subject: 4,
    importance: 1,
    control: 3
  },
  {
    id: 4,
    title: 'tags',
    zone: 'client side',
    subject: 5,
    importance: 3,
    control: 2
  },
  {
    id: 5,
    title: 'collections',
    zone: 'server side',
    subject: 6,
    importance: 2,
    control: 3
  },
  {
    id: 6,
    title: 'schema',
    zone: 'server side',
    subject: 6,
    importance: 3,
    control: 2
  }
];

module.exports = {
  getAll(subjectId) {
    return topics.filter(s => s.subject === +subjectId);
  },

  add(newTopic) {
    topics.push({ id: topics.length, ...newTopic});
    console.log(topics);
    return true;
  }
};
