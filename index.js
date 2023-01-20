//const express = require("express");

import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
import moviesRouter from "./routes/movies.route.js";
import usersRouter from "./routes/users.route.js";
import cors from "cors";
dotenv.config();
console.log(process.env.MONGO_URL);
const app = express();
const PORT = process.env.PORT;

//connection:
//const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongo is connected");

app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
    response.send("WELCOME BUDDY");
});


app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

const mobiles = [{
    "model": "OnePlus 9 5G",
    "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
    "company": "Oneplus"
},
{
    "model": "Iphone 13 mini",
    "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
    "company": "Apple"
},
{
    "model": "Samsung s21 ultra",
    "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
    "company": "Samsung"
},
{
    "model": "Xiomi mi 11",
    "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
    "company": "Xiomi"
}
]

app.get("/mobiles", async (request, response) => {

    const mobiles = await client
        .db("mdb").collection("mobiles").find({}).toArray();

    response.send(mobiles);
})


app.post("/mobiles", async (request, response) => {
    const data = request.body;
    const result = await client
        .db("mdb").collection("mobiles").insertMany(data);
    response.send(result);
})





app.listen(PORT, () => console.log(`the server started in: ${PORT}`));

export { client };




















