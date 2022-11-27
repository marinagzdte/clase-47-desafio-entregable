import { Router } from "../deps.ts";
import { get, post } from "../controllers/ColorsController.ts";

const router = new Router()
    .get("/", get)
    .post("/color", post)

export {router}