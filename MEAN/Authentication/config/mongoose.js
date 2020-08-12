const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/traversy_meanAuth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})