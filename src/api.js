const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*', 
    credentials: true 
}));


const router = express.Router();

router.get('/' , (req, res)=>{
    res.json({'msg': 'hello world'});
})

// Make sure the route is correctly mounted
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
