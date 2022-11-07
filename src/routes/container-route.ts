import express from "express";
import { CloudantV1 } from '@ibm-cloud/cloudant';
import { IamAuthenticator } from 'ibm-cloud-sdk-core';

const router = express.Router();

// set cloudant connection
const authenticator = new IamAuthenticator({ apikey: process.env.CLOUDANT_APIKEY });
const service = new CloudantV1({ authenticator: authenticator });
service.setServiceUrl(process.env.CLOUDANT_URL);


router.post('/apmt-events', (req, res) => {
    res.status(200).send("Event received successfully!");

    req.body.forEach(event => {
      service.postDocument({
        db: 'apmt-events',
        document: event
      });
    });    
});

router.post('/apmt-tl-events', (req, res) => {
    res.status(200).send("Event received successfully!");

    req.body.forEach(event => {
      service.postDocument({
        db: 'apmt-tl-events',
        document: event
      });
    });    
});


// router.get('/test', (req, res) => {
//     res.status(200).send("hello from Events Route!");
// });

export default router;