const express = require('express');
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const router = express.Router();
const moment = require('moment');
const axios = require('axios');
const {parse, stringify} = require('flatted/cjs');

const config = require('../config/config');
const constant = require('../config/constants');

passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_ID,
  clientSecret: config.FACEBOOK_SECRET,
  callbackURL: "http://localhost:5000/facebook/login/status",
  profileFields: ['id', 'displayName', 'link', 'email']
},  
(accessToken, refreshToken, profile, done) => {
  console.log('sds'+User);
  User.findOrCreate({ facebookId: profile.id }, (err, user) => {
    console.log(`HDDJ: ${user}`);
    if (err) { return done(err); }
    done(null, user);
  });
}));

// router.post('/page/post', (req, res) => {
//     try {
//         switch (req.body.delivery.type) {
//             case constant.DELIVERY_INSTANT: { 
                
//                 axios.get(req.body.url, req.body.data, req.body.config)
//                     .then(response => res.send(JSON.stringify(response)))
//                     .catch(err => console.log(err));
//                 break;
//             }
//             case constant.DELIVERY_SCHEDULED: {
//                 const time = moment(req.body.delivery.time, moment.ISO_8601);
//                 const rule = `${time.second()} ${time.minute()} ${time.hour()} ${time.date()} ${time.month()} *`;
//                 const job = new CronJob(
//                     rule,
//                     () => {
//                         client.post(req.body.path, req.body.params)
//                         .then(response => console.log(
//                             `tweet posted at ${time.format('h:mm:ss a, Do MMMM')} at ${
//                               req.body.delivery.timezone
//                             } timezone with ${response}`
//                           ))
//                           .catch(error => 
//                         console.log(`Error posting tweet: ${error}`))
//                     },
//                     null,
//                     false,
//                     req.body.delivery.timezone
//                 );
//                 job.start();
//                 console.log(`is job running? ${job.running}`);
//                 res.send(
//                 `Posting Tweet at ${time.format('h:mm:ss a, Do MMMM')} at ${
//                     req.body.delivery.timezone
//                 } timezone`
//                 );
//                 break;
//             }
//             default:
//         console.log(`invalid delivery type`);
//     }
// } catch (error) {
//     console.log(`Error posting tweet: ${error}`);
//     res.send(`Error posting tweet: ${error}`);
//   }

// })

router.get('/login',
  passport.authenticate('facebook', {
    scope: ['publish_pages', 'manage_pages', 'pages_show_list']
  })     
)

router.get('/login/status', passport.authenticate('facebook',
  (err, user, info) =>  console.log(`user: ${user}`)
), (req,res) => {
  res.send(req.body);
})

module.exports = router;