import express from "express";
import morgan from "morgan";
import createError from "http-errors";
import { rateLimit } from "express-rate-limit";
import { errorResponse } from "./helper/responseHandler.js";
import studentRouter from "./routes/studentRouter.js";
import userRouter from "./routes/userRouter.js";
import tutorRouter from "./routes/tutorRouter.js";
import cors from "cors";

import bodyParser from "body-parser";

const app = express();

const rateLimter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP,please try again later",
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(rateLimter);

// API routes
app.use("/api/student", studentRouter);
app.use("/api/user", userRouter);
app.use("/api/post", tutorRouter);
// testing api

app.get("/test", (req, res) => {
  res.status(200).json({ message: "Api is working" });
});

// error testing
app.use((req, res, next) => {
  next(createError(404, "Rout Not found"));
});

// server errors
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

export default app;
