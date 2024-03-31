import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import db from "./db-connection/connection.js"
import SignIn from "./signIn/index.js";
import Login from "./login/index.js";


const app = express()

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json())

app.post("/user-sign-in", SignIn)
app.post("/user-log-in", Login)


app.listen(3000, () => console.log("Server running on port 3000"))



