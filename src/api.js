const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: "https://fe2003.netlify.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

// Handle preflight requests
app.options("*", (req, res) => {
  res.sendStatus(200);
});

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello from Netlify Functions!" });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
