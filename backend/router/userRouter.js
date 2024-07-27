import express from "express";
import { createUser, deleteAllUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/",createUser);
router.get("/alluser",getAllUser);
router.get("/:id",getUser);
router.delete("/deleteuser",deleteAllUser);
router.delete("/:id",deleteUser);
router.patch("/update/:id",updateUser);




export default router