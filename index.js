require("dotenv").config();
const cors = require("cors");
const express = require("express");
const db = require("./Shared/Mongo");

//routes


const app = express();


let startServer = async () => {
    try {
        await db.connect();
        //for checking to browser;
        app.get("/", (req, res, next) => {
            res.status(200).send("server is running successfully");
            console.log("server is running successfully");
            next();
        });
        app.use(cors());
        app.use(express.json());
        //middlewares


        const port = process.env.PORT || 3001;
        app.listen(port, () => {
            console.log("server is runnging at", port);
        });
    } catch (err) {
        console.log(err);
    }
};
startServer();