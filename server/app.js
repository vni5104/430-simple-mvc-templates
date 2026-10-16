const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();


app.use(compression());

app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));
app.use(favicon(`${__dirname}/../hosted/img/favicon.png`));

const expressHandlebars = require('express-handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars.engine({defaultLayout: ''}));

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

router(app);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});

