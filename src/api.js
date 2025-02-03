const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

// Middleware to set CORS headers manually
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins, or specify the frontend domain
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(204).end(); 
    }

    next();
});

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ 'msg': 'hello world' });
});

app.use('/.netlify/functions/api', router);
app.use(cors());

module.exports.handler = serverless(app);
