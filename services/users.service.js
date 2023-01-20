
import { client } from "../index.js";


export async function createUsers(data) {
    return await client.db("mdb").collection("users")
        .insertOne(data);
}

export async function getUserByName(username) {
    return await client
        .db("mdb").collection("users").findOne({ username: username });
}
