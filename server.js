const express = require('express');
const mongoose = require('mongoose');

const app = express();

const events = require('./routes/api/events');
const blogs = require('./routes/api/blogs');
const homepage = require('./routes/index');
const dashboard = require('./routes/api/dashboard');
const admin = require('./routes/api/admin');

//BodyParser
app.use(express.urlencoded({ extended: false }));

//DB config
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));

//Use routes
app.use('/', homepage);
app.use('/events', events);
app.use('/blogs', blogs);
app.use('/admin', admin);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
