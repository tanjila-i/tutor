import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide a name"],
      trim: true,
      maxlength: [30, "Name cannot be more than 30 characters"],
      minlength: [3, "Name cannot be less than 3 characters"],
    },
    email: {
      type: String,
      required: [true, "please provide an email"],
      unique: true,
      trim: true,
      lowercase: true,
      validator: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: "Please provide a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password cannot be less than 8 characters"],
    },
    phone: {
      type: String,
      require: [true, "user phone is required"],
    },
  },
  { timestamps: true }
);

const userModel = model.user || model("User", userSchema);
export default userModel;

// set: function (v) {
//   return bcryptjs.hashSync(v, bcryptjs.genSaltSync(10));
// },
