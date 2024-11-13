// GET /users => obtener todos los usuarios
// GET /users:id => obtener un usuario

// POST /register => crear un nuevo usuario
import { Router } from "express";
import { getOneUser, getUsers, registerUser } from "../controllers/usersController";

const userRouter = Router();

userRouter.get("/", getUsers)

userRouter.get("/:id", getOneUser)

userRouter.post("/register", registerUser)

export default userRouter;

