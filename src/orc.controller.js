import axios from "axios";
import apiRoutes from "./api-routes.js";

export const login = async (req, res) => {
  try {
    const response = await axios.post(
      `${apiRoutes.gestionUsuario}/login`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

export const register = async (req, res) => {
  try {
    const response = await axios.post(
      `${apiRoutes.gestionUsuario}/users`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

// Redirigir a /rides/create del microservicio de scooters
export const startRide = async (req, res) => {
  try {
    const response = await axios.post(
      `${apiRoutes.scooterManagement}/rides/create`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

// Redirigir a /rides/:id/end del microservicio de scooters
export const endRide = async (req, res) => {
  try {
    const response = await axios.put(
      `${apiRoutes.scooterManagement}/rides/${req.params.id}/end`
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

// Redirigir a /users/{user_id}/reviews del microservicio de usuarios
export const submitReview = async (req, res) => {
  try {
    const { user_id } = req.params;
    const response = await axios.post(
      `${apiRoutes.gestionUsuario}/users/${user_id}/reviews`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

export const createTransaction = async (req, res) => {
  try {
    const response = await axios.post(
      `${apiRoutes.transaction}/transactions`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

export const createBoleta = async (req, res) => {
  try {
    const response = await axios.post(
      `${apiRoutes.boleta}/boletas`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

export const getPendingMantenimientos = async (req, res) => {
  try {
    const response = await axios.get(`${apiRoutes.maintenance}/mantenimientos/pending`);
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

export const getMantenimientosByTecnicoId = async (req, res) => {
  try {
    const response = await axios.get(`${apiRoutes.maintenance}/mantenimientos/tecnico/${req.params.id_tecnico}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};


export const updateMantenimientoStatusAndTecnico = async (req, res) => {
  try {
    const response = await axios.patch(
      `${apiRoutes.maintenance}/mantenimientos/${req.params.id}/status-tecnico`,
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};

export const getScooters = async (req, res) => {
  try {
    const response = await axios.get(`${apiRoutes.scooterManagement}/avaliblescooters`);
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Error al conectarse con el servidor" });
    }
  }
};
