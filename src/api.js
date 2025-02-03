const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());

app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(200);
});

const router = express.Router();

router.get('/' , (req, res)=>{
    res.json({'msg': 'hello world'});
})

// Make sure the route is correctly mounted
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
