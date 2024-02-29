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

// app.get("/user-sign-in", (req, res) => {
//     db.query("select * from user", async (err, result) => {
//       const data = await cleanRowDataPacket(result)
//       const compareResults = result.map(row => {
//         return {
//           username: row.username,
//           isPasswordMatch: bcrypt.compareSync("mabappe", row.password)
//         };
//       });
//       console.log(compareResults)
//       console.log(data)
//         res.send("Hasil: " + JSON.stringify(data))
//     })
// })

app.post("/user-sign-in", SignIn)
app.post("/user-log-in", Login)


app.listen(3000, () => console.log("Server running on port 3000"))



