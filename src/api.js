const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());

// Enable CORS for frontend domain
const corsOptions = {
    origin: 'https://fe2003.netlify.app',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
};
app.use(cors(corsOptions));

// Handle OPTIONS preflight requests manually
app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://fe2003.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(204).end();
});

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Hello from Netlify Functions!' });
});

// Ensure function is correctly mounted
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
