const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());

//  Enable CORS for your frontend domain
app.use(cors({
    origin: 'https://fe2003.netlify.app',  
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
}));

//  Handle Preflight (OPTIONS) Requests
app.options('*', cors());

const router = express.Router();

router.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://fe2003.netlify.app'); 
    res.json({ 'msg': 'hello world' });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
