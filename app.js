import express from "express";
import { mongoDb } from "./connection.js";

import router from "./routes/url.js";
import env from "dotenv";
env.config();
const app = express();
mongoDb();

app.use(express.json());
app.use("/api/short",router);

app.listen(process.env.PORT, () => {
   console.log( `listening on port ${process.env.PORT}`)
})
