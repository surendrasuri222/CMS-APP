const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const checkAuth = require("../middleware/tokenCheck")
const verifyToken = require("../middleware/verifyToken")

userRouter.get("/", userController.getUsers);
userRouter.get("/id", userController.getLatestUsers);
userRouter.post("/add", userController.createUser);
userRouter.put("/edit/:id", userController.updateUser);
userRouter.get("/:id", userController.getUserById);
userRouter.delete("/:id", userController.getUserByIdAndDelete);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;