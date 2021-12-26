const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(
  'ACc0efcb44a2df7fc58b302b0507592246',
  'c21f942a02a37827bc8d6e33ce63629b'
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:'+req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
