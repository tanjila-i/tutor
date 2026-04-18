import express from "express";
import { tuitionPost, tutorPost } from "../controllers/tutorController.js";
import upload from "../middlewares/multer.js";

const tutorRouter = express.Router();

tutorRouter.post("/tutor", tutorPost);
tutorRouter.post("/tuition", upload.single("image"), tuitionPost);

export default tutorRouter;
