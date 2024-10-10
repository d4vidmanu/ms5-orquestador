import express from "express";
import cors from "cors"; // Importa cors
import orc from "./orc.routes.js";

const app = express();

// Habilitar CORS para todas las rutas
app.use(cors()); // Esto permitirá que cualquier origen acceda a tu API

app.use(express.json());
app.use(orc);

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
