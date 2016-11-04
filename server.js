const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/src/views/layouts'
}));
app.set('views', __dirname + '/src/views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('App is now running on port 3000');
});