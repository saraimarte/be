const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

const router = express.Router();

router.get('/' , (req, res)=>{
    res.json({'msg': 'hello world'});
})

// Make sure the route is correctly mounted
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
