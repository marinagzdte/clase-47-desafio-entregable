import { Application } from "./deps.ts";
import { router } from "./routes/ColorRouter.ts";

const app = new Application();
app.use(router.routes());

export { app }