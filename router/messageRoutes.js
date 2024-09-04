import express from "express";
import { isAuthenticated } from "./../middlewares/auth.js";
import {
  getAllMessage,
  sendMessage,
  deleteMessage,
} from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getAll", getAllMessage);
router.delete("/delete/:id", isAuthenticated, deleteMessage);

export default router;
