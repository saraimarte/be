const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ['https://fe2003.netlify.app'], 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue:false,
    optionsSuccessStatus: 200,
    credentials: false
}

app.use(cors(corsOptions));

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Hello from Netlify Functions!' });
});

// Ensure function is correctly mounted
app.use('/.netlify/functions/api', router);

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const url = event.queryStringParameters.url;
  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    },
    body: JSON.stringify(data)
  };
};
