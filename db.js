let mongoose = require('mongoose');

// let urlConn = 'mongodb://127.0.0.1/test';

let urlConn = 'mongodb://localhost:27017/test';

// let urlConn = 'mongodb://heroku_7f3cw4hf:5ffqfohb6gkh0k66gc60q3c9c6@ds239578.mlab.com:39578/heroku_7f3cw4hf';

mongoose.connect(urlConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});