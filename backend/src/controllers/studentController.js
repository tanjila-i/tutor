import { successResponse } from "../helper/responseHandler.js";
import studentModel from "../models/studentModel.js";
import createError from "http-errors";
import bcrypt from "bcryptjs";
import { createJSONWebToken } from "../helper/jsonWebToken.js";
import { jwtActivationKey } from "../secretFile.js";

const studentRegister = async (req, res, next) => {
  try {
    const { name, email, password, phone } = req.body;

    const emailExits = await studentModel.exists({ email: email });

    if (emailExits) {
      throw createError(409, "email already exits please sign in");
    }

    const token = createJSONWebToken(
      { name, email, password, phone },
      jwtActivationKey,
      "10m"
    );

    return successResponse(res, {
      statusCode: 200,
      message: "Student register was successfully",
      payload: { token },
    });
  } catch (error) {
    next(error);
  }
};

export { studentRegister };

// const studentRegister = async (req, res) => {
//   try {
//     const { name, email, password, phone } = req.body;
//     if (!name || !email || !password || !phone) {
//       return res.json({ success: false, message: "Missing Details" });
//     }

//     const studentData = { name, email, password, phone };

//     const newStudent = new studentModel(studentData);
//     await newStudent.save();
//     res.json({ success: true, message: "student Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };
