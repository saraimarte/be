const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());

// Enable CORS for frontend domain
const corsOptions = {
    origin: 'https://fe2003.netlify.app',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Hello from Netlify Functions!' });
});

// Ensure function is correctly mounted
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
