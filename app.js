const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const validator = require('express-validator');
const {mongoose} = require('./db');
var {User} = require('./models/user');
const PORT = process.env.PORT || 5000;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(validator());

app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => res.render("index"));

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
console.log("readched here1");
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        console.log("readched here");
        return res.status(422).json({ errors: errors });
    }
    else {
        User.findOne({
            username: username
        }, (err, doc) => {
            if (doc === null){
                return res.status(401).json({
                    error: 'Incorrect username and/or password'
                });
            }
            if (doc.password === password) {
                return res.status(200).json({msg: 'Success login'});
            }
            else {
                return res.status(401).json({
                    error: 'Incorrect username and/or password'
                });
            }
        });
    }
});

app.get('/dashboard', (req, res) => {
    console.log("hi");
    res.render("dashboard");
});


app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});
