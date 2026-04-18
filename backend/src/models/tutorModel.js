import bcrypt from "bcryptjs";
import mongoose, { Schema, model, set } from "mongoose";

const tutorSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Provide Your Name"],
      trim: true,
      maxlength: [30, "Name cannot be more than 30 characters"],
      minlength: [3, "Name cannot be less than 3 characters"],
    },
    email: {
      type: String,
      require: [true, "Provid your email"],
      unique: true,
      trim: true,
      lowercase: true,
      validator: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: "Please Provid a valid email",
      },
    },

    phone: {
      type: String,
      require: [true, "Provide your Phone Number"],
    },

    subject: {
      type: String,
      require: [true, "Provide Your Subject"],
      trim: true,
    },
    degree: {
      type: String,
      require: [true, "Provide Your Degree"],
    },

    tuition: {
      type: String,
      require: [true, "Provid your Tutor"],
    },

    experience: {
      type: String,
      require: [true, "Provid your Esperience"],
    },
    about: {
      type: String,
      require: [true, "Provid your your Details"],
    },

    address: {
      type: Object,
      require: [true, "Provid your Address"],
    },
  },
  { timestamps: true }
);

const tutorModel = mongoose.model.tutor || mongoose.model("tutor", tutorSchema);

export default tutorModel;
