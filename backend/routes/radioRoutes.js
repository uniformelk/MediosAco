import express  from "express";
import { consulta, addRegistro, consultaUnica } from "../controllers/radioController.js";

const router = express.Router();

router.get('/', consulta);
router.post('/', addRegistro);
router.get('/:id', consultaUnica);

export default router;

