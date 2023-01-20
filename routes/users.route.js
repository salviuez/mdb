import express from "express";
import { createUsers, getUserByName } from "../services/users.service.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();



async function generateHashedPassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hashedPassword);
    return hashedPassword;
}


router.post("/signup", async function (request, response) {
    const { username, password } = request.body;

    const userFromDB = await getUserByName(username);
    if (userFromDB) {
        response.status(400).send({ message: "Name Alreay Exist" })
    } else if (password.length < 8) {
        response.status(400).send({ message: 'Password must be more than 8 chars' });
    }
    else {


        const hashedPassword = await generateHashedPassword(password);
        const result = await createUsers({
            username: username,
            password: hashedPassword,
        });

        response.send(result);

    }


});

router.post("/login", async function (request, response) {
    const { username, password } = request.body;

    const userFromDB = await getUserByName(username);
    console.log(userFromDB);

    if (!userFromDB) {
        response.status(401).send({ message: 'Invalid Credentials' })
    } else {
        const storedDBPassword = userFromDB.password;
        const isPasswordCheck = await bcrypt.compare(password, storedDBPassword);
        console.log(isPasswordCheck)
        if (isPasswordCheck) {
            const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
            response.send({ message: "Login Successfully", token: token })
        } else {
            response.status(401).send("Invalid Credentials");
        }

    }



});



export default router;


