
import { client } from "../index.js";

export async function deleteMovieById(id) {
    return await client
        .db("mdb").collection("movies").deleteOne({ id: id });
}
export async function updateMovieById(id, data) {
    return await client
        .db("mdb")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function createMovie(data) {
    return await client.db("mdb").collection("movies")
        .insertMany(data);
}
export async function getMovieById(id) {
    return await client
        .db("mdb").collection("movies").findOne({ id: id });
}
export async function getAllMovies(request) {
    return await client.db("mdb").collection("movies")
        .find(request.query).toArray();
}
