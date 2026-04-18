import "dotenv/config.js";

const serverPort = process.env.SERVER_PORT || 5001;

const mongooseUrl = process.env.MONGO_LOCAL_URI;

const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || "NABSDAsshyvadvvsdw";

const cloudName = process.env.CLOUDINARY_NAME;
const cloudKey = process.env.CLOUDINARY_API_KEY;
const cloudSecretKey = process.env.CLOUDINARY_SECRET_KEY;

export {
  serverPort,
  mongooseUrl,
  jwtActivationKey,
  cloudName,
  cloudKey,
  cloudSecretKey,
};
