const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRouter = require('./routers/user');
const subjectRouter = require('./routers/subject');

app.use(express.static('../client/dist'));
app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/subject', subjectRouter);

app.listen(3000, () => {
    console.log('fill stack server runing in port 3000');
})