const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
app.use(cors());

const app = express();
app.use(express.json());


// Set CORS headers manually for all responses
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change '*' to your frontend domain if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

const router = express.Router();

router.get('/' , (req, res)=>{
    res.json({'msg': 'hello world'});
})

// Make sure the route is correctly mounted
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
