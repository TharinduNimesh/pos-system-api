import express from "express";
import { SignInRouter } from "./auth";

const router = express.Router();

router.use("/auth/sign-in", SignInRouter);

export const APIv1 = router;
