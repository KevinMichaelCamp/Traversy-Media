const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const mongoose = require('./config/mongoose');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use(express.urlencoded({
    extended: true
}));
require('./config/routes')(app);

app.listen(6789, () => {
    console.log(`Server started on port 6789`);
});