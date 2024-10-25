const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index');

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});