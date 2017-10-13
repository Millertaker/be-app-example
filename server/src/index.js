import express from 'express';
import handlebars from 'express-handlebars';

import index from './controllers/home';
import mongoose from 'mongoose';


/**
*
* App configurations
*/

let db = mongoose.connect('mongodb://localhost:27017/onlinestore');
let app = express();

app.disable('x-powered-by');

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  partialsDir: __dirname + '/../views/partials',
  layoutsDir: __dirname + '/../views/layouts/',
}));

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/../views');


app.set('port', !module.parent ? process.env.PORT || 3000 : 3333);
app.use(express.static(__dirname + '/../../public'));


/**
*
* Controllers config
*/
index().init(app);

/**
*
* Start app
*/
app.listen(app.get('port'), () => {
  console.log('running server on: ' + app.get('port'));
});

module.exports = app;
