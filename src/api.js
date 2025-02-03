const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

app.use(cors({
    origin: "*",
}));

const app = express();
app.use(express.json());

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ 'msg': 'hello world' });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
