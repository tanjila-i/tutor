import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import { serverPort } from "./src/secretFile.js";

app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);
  await connectDB();
});
