## /firebase/pushnotifications/send (POST)

---

#### Headers

```
"Content-Type": "application/json"
```

#### Body

```
{
    "fcm": <admin.messaging.MessagingPayload> ,
    "tokens": <array of registration tokens>,
    "delivery": {
        "type": <schedule/instant>,
        "timezone": <Continent/Location>
        "time": <YYYY-MM-DDTHH:mm:ss>
    },
    "account": <customer/merchant>
}
```

- Read this:
  [admin.messaging.MessagingPayload](https://firebase.google.com/docs/reference/admin/node/admin.messaging.MessagingPayload)

- [Continent/Location available see in the map](https://momentjs.com/timezone/)

### Example

```
{
    "fcm": {
        "notification": {
            "title": "Message Example",
            "body": "Example message to be send",
            "sound": "default",
    		"badge": "1",
            "color": "#ee2354",
            "icon": "myicon"
        }
    } ,
     "tokens": [
        "evXNnqhv3n0:APA91bE-9GzMTSUsqu-_R_HmYIqWJoMAcg_Z3_M7ngansj2aCE_qP761B-qmWxjtOpR4OPCn7Vf0qE50EB34mUaW8umdxMPq4Pejmbnib-XOLzM3B9nxcIcMhpsYd8rsPn0A7zujo9Sj",
        "cwwyrgWQGKE:APA91bFo-GGYMyPK10QSkOI72Q4TE5yRQOGd0Noyz8UuN3_UQjRJhTNFGUdGhug7VbB0yoDELfPvJOFEgwHV2phet3pSOw5-1woLPBRmiaNj6dK6sIDmzdzf9YV6sRqAuDffcdhDLOAQ"
    ],
    "delivery": {
        "type": "schedule",
        "timezone": "Asia/Kolkata"
        "time": "2019-02-29T05:06:07"
    },
    "account": "customer"
}
```

#### Test Scripts

---

[Test Collection](https://www.getpostman.com/collections/563f8224b1e8793a4787)
[Documentation](https://documenter.getpostman.com/view/6690896/S11BziBe)


## /sendgrid/mail/send (POST)

---

#### Headers

```
"Content-Type": "application/json"
```

#### Body

```
{
    "message": {
        "to": <an array of recipients>,
        "from": <sender's mail id>,
        "subject": <subject of mail>,
        "text": <text mail body>,
        "html": <html mail body>
    },
    "delivery": {
        "type": <schedule/instant>,
        "timezone": <Continent/Location>
        "time": <YYYY-MM-DDTHH:mm:ss>
    }
}
```
> you can form `message` as given in use cases
[Click here for more use cases](https://github.com/sendgrid/sendgrid-nodejs/blob/master/packages/mail/USE_CASES.md)

### Example

#### without personalisation
```
{
    "message" : {
        "to": ["recipient1@example.org", "recipient2@example.org"],
        "from": "sender@example.org",
        "subject": "Hello world",
        "text": "Hello plain world!",
        "html": "<p>Hello HTML world!</p>",
    },
    "delivery": {
        "type": "schedule",
        "timezone": "Asia/Kolkata"
        "time": "2019-02-29T05:06:07"
    },
}
```
#### with personalization and dynamic template per recipient
```
{
    "message": {
        "personalizations": [
            {
                "to": [
                    {
                        "email": "jaysondmello@gmail.com",
                        "name": "Jayson Dmello"
                    }
                ],
                "dynamic_template_data": { 
				 "user":{
      "male":true,
      "name":"Jayson",
      "offers":[
         {
            "offer_expiry":"2/1/2018",
            "offer_title":"Free shoe for you",
            "offer_image":"https://marketing-image-production.s3.amazonaws.com/uploads/8dda1131320a6d978b515cc04ed479df259a458d5d45d58b6b381cae0bf9588113e80ef912f69e8c4cc1ef1a0297e8eefdb7b270064cc046b79a44e21b811802.png"
         },
         {
            "offer_expiry":"2/12/2019",
            "offer_title":"Free haircut for you",
            "offer_image":"https://timedotcom.files.wordpress.com/2018/01/sharon-stone.jpg"
         }
      ]
   }
				}, 
                "subject": "Hello, World! Welcome to CarrotBox"
            },
             {
                "to": [
                    {
                        "email": "crm4everyone@gmail.com",
                        "name": "CarrotBox Team"
                    }
                ],
                "dynamic_template_data": { 
				 "user":{
      "male":true,
      "name":"CarrotBox",
      "offers":[
         {
            "offer_expiry":"2/1/2018",
            "offer_title":"Free drink for you",
            "offer_image":"https://marketing-image-production.s3.amazonaws.com/uploads/8dda1131320a6d978b515cc04ed479df259a458d5d45d58b6b381cae0bf9588113e80ef912f69e8c4cc1ef1a0297e8eefdb7b270064cc046b79a44e21b811802.png"
         },
         {
            "offer_expiry":"2/12/2019",
            "offer_title":"Free soup for you",
            "offer_image":"https://timedotcom.files.wordpress.com/2018/01/sharon-stone.jpg"
         }
      ]
   }
				}, 
                "subject": "Hello, World! Welcome to CarrotBox"
            }
        ],
        "from": {
            "email": "info@carrotbox.app",
            "name": "CarrotBox Rewards App"
        },
        "reply_to": {
            "email": "crm4everyone@gmail.com",
            "name": "CB Support"
        }
    },
     "template_id":"d-72230435736c49e29ae0b68d131fdd34",
    "delivery": {
        "type": "instant"
    }
}
```

## /twilio/sms/send (POST)

---

#### Headers

```
"Content-Type": "application/json"
```

#### Body
```
{
    "sms": {
        "body": <sms body>,
        "numbers": <array of numbers to send in E.164 format>
    },
    "delivery": {
        "type": <schedule/instant>,
        "timezone": <Continent/Location>
        "time": <YYYY-MM-DDTHH:mm:ss>
    }
}
```

> [What is E.164](https://www.twilio.com/docs/glossary/what-e164)