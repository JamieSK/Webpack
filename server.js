let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./controllers/index'));

app.use(express.static('client/build'));

app.listen(3000, function() {
  console.log('App running on port ' + this.address().port);
});
