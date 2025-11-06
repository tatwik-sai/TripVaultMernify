import { Router } from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import multer from "multer";
import fs from "fs";
import { uplodFile } from "../controllers/CapturesController.js";


const capturesRoutes = Router();
if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads", { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

capturesRoutes.post("/:userId/uploads", ClerkExpressRequireAuth(), upload.single("snapshot"), uplodFile)
