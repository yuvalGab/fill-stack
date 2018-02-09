const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const userRouter = require('./routers/user');
const subjectRouter = require('./routers/subject');
const topicRouter = require('./routers/topic');
const resourceRouter = require('./routers/resource');
const { checkAuth } = require('./utils/checkAuth');
const app = express();

app.use(express.static('../client/dist'));
app.use(expressSession({ 
  secret: 'stack',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(checkAuth);

app.use('/api/user', userRouter);
app.use('/api/subject', subjectRouter);
app.use('/api/topic', topicRouter);
app.use('/api/resource', resourceRouter);

app.listen(3000, () => {
  console.log('fill stack server runing in port 3000');
});
