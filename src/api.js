const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://fe2003.netlify.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    // Handle preflight requests
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
  
    next();
  });
  
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Hello from Netlify Functions!' });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
