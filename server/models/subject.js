const subjects = [
  {
    id: 0,
    title: 'JavaScript',
    zone: 'client side',
    importance: 3,
    control: 2
  },
  {
    id: 1,
    title: 'Node.js',
    zone: 'server side',
    importance: 3,
    control: 1
  },
  {
    id: 2,
    title: 'git',
    zone: 'both sides',
    importance: 2,
    control: 2
  },
  {
    id: 3,
    title: 'docker',
    zone: 'both sides',
    importance: 1,
    control: 3
  },
  {
    id: 4,
    title: 'HTML',
    zone: 'client side',
    importance: 3,
    control: 2
  },
  {
    id: 5,
    title: 'Mongo.DB',
    zone: 'server side',
    importance: 2,
    control: 3
  },
  {
    id: 6,
    title: 'MySQL',
    zone: 'server side',
    importance: 3,
    control: 2
  }
];

module.exports = {
  getAll(zone) {
    return subjects.filter(s => s.zone === zone);
  },

  getTitle(subjectId) {
    return { title: subjects[+subjectId].title };
  },

  getZone(subjectId) {
    return subjects.find(s => s.id === subjectId).zone;
  },

  add(newSubject) {
    subjects.push({ id: subjects.length, ...newSubject });
    return true;
  },

  edit({id, subjectDetails}) {
    const oldSubject = subjects.find(s => s.id === id);
    this.delete(id);
    subjects.push({ id, ...oldSubject, ...subjectDetails });
    return true;
  },

  delete(id) {
    const subject = subjects.find(s => s.id === id);
    subjects.splice(subjects.indexOf(subject) , 1);
    return true;
  }
};
