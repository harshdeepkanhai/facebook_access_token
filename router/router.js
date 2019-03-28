const firebase = require('../controllers/firebase');
const sendgrid = require('../controllers/mail');
const twilio = require('../controllers/message');
const twitter = require('../controllers/twitter');
const facebook = require('../controllers/facebook');

module.exports = function(app) {
  app.use('/firebase', function(req, res, next) {
    next();
  });

  // Handle API's
  app.use('/firebase', firebase);
  app.use('/sendgrid', sendgrid);
  app.use('/twilio', twilio);
  app.use('/twitter', twitter);
  app.use('/facebook', facebook);
};
