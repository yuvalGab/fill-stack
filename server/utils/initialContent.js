
const client = [
  {
    subject: 'HTML',
    topics: ['tags', 'forms', 'images', 'canvas', 'audio', 'video', 'links', 'tables', 'head', 'body', 'script', 'iframes', 'lists', 'inline style', 'attributes']
  },
  {
    subject: 'CSS',
    topics: ['selectors', 'positions', 'floats', 'box model', 'flexbox', 'css-grid']
  },
  {
    subject: 'JavaScript',
    topics: ['variables', 'operators', 'data types', 'functions', 'objects', 'DOM', 'scope', 'events', 'JSON', 'callbacks', 'promises', 'AJAX']
  },
  {
    subject: 'Chrome DevTools',
    topcis: []
  },
  {
    subject: 'jQuery',
    topics: ['selectors', 'events', 'chaining','animation' , 'AJAX']
  },
  {
    subject: 'Bootstrap',
    topics: []
  },
  {
    subject: 'TypeScript',
    topics: []
  },
  {
    subject: 'Angular',
    topics: ['Angular CLI', 'components', 'input/output', 'services', 'routing', 'HTTP', 'directives', 'pipes', 'guard']
  },
  {
    subject: 'React',
    topics: []
  },
  {
    subject: 'webpack',
    topics: []
  },
  {
    subject: 'Babel',
    topics: []
  }
];

const server = [
  {
    subject: 'Node.js',
    topics: ['net', 'http', 'fs', 'stream']
  },
  {
    subject: 'npm',
    topics: ['package.json', 'node_modules', 'scripts', 'versions']
  },
  {
    subject: 'express',
    topics: ['http server', 'router', 'middleware', 'body-parser', 'cookie-parser', 'express-session']
  },
  {
    subject: 'MySQL',
    topics: ['SQL', 'node driver', 'Sequelize', 'phpMyAdmin', 'Workbench']
  },
  {
    subject: 'MongoDB',
    topics: ['Mongoose']
  }
];

const both = [
  {
    subject: 'git',
    topics: ['init', 'add', 'commit', 'pull', 'push', 'merge', 'rebase', 'gitignore']
  },
  {
    subject: 'Postman',
    topics: []
  },
  {
    subject: 'Socket.IO',
    topics: []
  }
];

const formatContent = (content, zone) => (
  content.map(s => {
    s.topics.unshift('general');
    return {
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
  })
);

module.exports = [
  ...formatContent(client, 'client side'), 
  ...formatContent(server, 'server side'), 
  ...formatContent(both, 'both sides')
];