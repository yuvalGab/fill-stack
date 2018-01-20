
const client = [
  {
    subject: 'HTML',
    topics: ['tags', 'forms']
  }
];

const server = [
  {
    subject: 'node.js',
    topics: ['net', 'http']
  }
];

const both = [
  {
    subject: 'git',
    topics: ['commit', 'stage', 'merge']
  }
];

const formatContent = (content, zone) => (
  content.map(s => (
    {
      subject: {
        title: s.subject,
        zone,
        importance: 1,
        control: 1
      },
      topics: s.topics.map(t => (
        {
          title: t,
          importance: 1,
          control: 1,
          description: ''
        }
      ))
    }
  ))
);

module.exports = [
  ...formatContent(client, 'client side'), 
  ...formatContent(server, 'server side'), 
  ...formatContent(both, 'both sides')
];