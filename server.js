const express = require('express');
const handlebars = require('express-handlebars');

const views = require('./routes/views');
const api = require('./routes/api');

const app = express();

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/api', api);
app.use('/', views);

app.listen(3000, () => {
  console.log('App is now running on port 3000');
});