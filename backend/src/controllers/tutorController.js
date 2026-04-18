import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import tutorModel from "../models/tutorModel.js";
import tuitionJobModel from "../models/tuituionJobModel.js";

const tutorPost = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      degree,
      tuition,
      experience,
      about,
      address,
    } = req.body;

    const imageFile = req.file;

    if (!validator.isEmail(email)) {
      res.status(400).json({
        success: false,
        message: "Provide a valid email",
      });
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

    const tutorData = {
      name,
      email,
      phone,
      subject,
      degree,
      tuition,
      experience,
      about,
      address,
      image: imageUrl,
    };

    const newTutor = new tutorModel(tutorData);

    await newTutor.save();

    res.status(200).json({
      success: true,
      newTutor,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const tuitionPost = async (req, res) => {
  try {
    const { name, email, phone, subject, tuition, address } = req.body;

    if (!name || !email || !phone || !subject || !tuition || !address) {
      res.status(404).json({
        success: false,
        message: "Provide all the details",
      });
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({
        success: false,
        message: "Provide a valid email",
      });
    }

    const tutionData = { name, email, phone, subject, tuition, address };

    const newTuition = new tuitionJobModel(tutionData);

    await newTuition.save();

    res.status(200).json({
      success: true,
      newTuition,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { tutorPost, tuitionPost };

// const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
//   resource_type: "image",
// });

// const imageUrl = imageUpload.secure_url;

// const tutorData = {
//   tutorName,
//   email,
//   password,
//   phone,
//   subject,
//   degree,
//   experience,
//   about,
//   address,
//   image: imageUrl,
// };
