import express from "express";
import orc from "./orc.routes.js";

const app = express();

app.use(express.json());
app.use(orc);

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
