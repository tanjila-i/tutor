import { v2 as cloudinary } from "cloudinary";
import { cloudKey, cloudName, cloudSecretKey } from "../secretFile";

const conectCloudanary = async () => {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: cloudKey,
    api_secret: cloudSecretKey,
  });
};

export default conectCloudanary;
