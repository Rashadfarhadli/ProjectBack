const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const {rateLimit} = require("express-rate-limit");
const app = express();
require(`dotenv`).config();


//global middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//security middlewares

app.use(helmet())

const corsOptions = {
    origins:['http://localhost:5730'],
    optionsSuccesStatus:200,
}

app.use(cors(corsOptions))
const limiter = rateLimit({
    windowMs:15 * 60 * 1000,//15 minutes
    limit:100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
})

app.use(limiter);


module.exports = app;