import { Router } from "express";
import {
  login,
  register,
  startRide,
  endRide,
  submitReview,
  getScooters,  // Nuevo endpoint
  getPendingMantenimientos,
  getMantenimientosByTecnicoId,
  updateMantenimientoStatusAndTecnico,
  createTransaction,
  createBoleta
} from "./orc.controller.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/iniciar_viaje", startRide);
router.put("/terminar_viaje/:id", endRide);
router.post("/usuario/:user_id/resenas", submitReview);

// Nuevo endpoint para obtener scooters
router.get("/scooters", getScooters);

// Rutas de mantenimiento
router.get("/mantenimientos/pendientes", getPendingMantenimientos);
router.get("/mantenimientos/tecnico/:id_tecnico", getMantenimientosByTecnicoId);
router.patch("/mantenimientos/:id/status-tecnico", updateMantenimientoStatusAndTecnico);

// Rutas de transacciones y boletas
router.post("/transactions", createTransaction);
router.post("/boletas", createBoleta);

export default router;
