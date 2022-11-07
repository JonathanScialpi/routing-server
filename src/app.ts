require('dotenv').config();
import express from "express";
import containerRoute from "./routes/container-route";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/events", containerRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});