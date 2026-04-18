import express from "express";
import { studentRegister } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/process-register", studentRegister);

export default studentRouter;
