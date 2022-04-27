import userController from "./controllers/user-controller.js";
import authController from "./controllers/auth-controller.js"
import mongoose from "mongoose";
import cors from 'cors';
import express from "express";
import session from "express-session";

const app = express();
// mongoose.connect('mongodb+srv://giuseppi:supersecretpassword@cluster0.m8jeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/huskyboxd');
app.use(cors());
app.use(session({
    secret: 'SECRETO',
    cookie: {secure: false}
}));
app.use(express.json());

userController(app);
authController(app);
app.get('/', (request, response) => {
    response.send("Welcome to WebDev");
});

app.listen(process.env.PORT || 4000);