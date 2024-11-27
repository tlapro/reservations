
import { NextFunction, Request, Response, Router } from "express";
import { getOneUser, getUsers, loginUser, registerUser } from "../controllers/usersController";
import { IUserLoginDTO, IUserRegisterDTO } from "../dtos/userDto";
import { validateUserRegisterData } from "../middlewares";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => getUsers(req, res))

userRouter.get("/:id", (req: Request< { id: string } >, res: Response) => getOneUser(req, res))

userRouter.post("/register", 
    (req: Request, res: Response, next: NextFunction) => validateUserRegisterData(req, res,
    next),
    (req: Request<unknown, unknown, IUserRegisterDTO >, res: Response) => registerUser(req, res));

userRouter.post("/login", (req: Request < unknown, unknown, IUserLoginDTO >, res: Response) => loginUser(req, res))


export default userRouter;

