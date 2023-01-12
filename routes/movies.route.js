import express from "express";
const router = express.Router();

router.get("/", async function (request, response) {

    if (request.query.rating) {
        request.query.rating = + request.query.rating;
    }
    console.log(request.query);

    const movies = await getAllMovies(request);


    //console.log(movies);
    response.send(movies);
});

router.get("/:id", async function (request, response) {
    //console.log(request.params);

    const { id } = request.params;
    console.log(id);
    const movie = await client
        .db("mdb").collection("movies").findOne({ id: id });
    console.log(movie);


    // const movie = movies.filter((mv) => mv.id === id);
    // const movie = movies.find((mv) => mv.id === id)
    // console.log(movie);


    movie ? response.send(movie) : response.status(404).send({ message: "Movie not fount" });

});


router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);

    const result = await client.db("mdb").collection("movies")
        .insertMany(data);

    response.send(result);


});

router.put("/:id", async function (request, response) {
    //console.log(request.params);

    const { id } = request.params;
    const data = request.body;
    console.log(id);
    const result = await client
        .db("mdb")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });



    // const movie = movies.filter((mv) => mv.id === id);
    // const movie = movies.find((mv) => mv.id === id)
    // console.log(movie);

    response.send(result);

});

router.delete("/:id", async function (request, response) {
    //console.log(request.params);

    const { id } = request.params;
    console.log(id);
    const result = await client
        .db("mdb").collection("movies").deleteOne({ id: id });
    console.log(result);


    // const movie = movies.filter((mv) => mv.id === id);
    // const movie = movies.find((mv) => mv.id === id)
    // console.log(movie);


    result.deletedCount > 0 ? response.send({ message: "Movie deleted successfully" }) : response.status(404).send({ message: "Movie not fount" });

});

export default router;

async function getAllMovies(request) {
    return await client.db("mdb").collection("movies")
        .find(request.query).toArray();
}
