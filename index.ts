import {app} from "./src/server.ts"

const { PORT } = {PORT:8080}//config();
try {
    await app.listen({ port: PORT });
    console.log(`Server up on port ${PORT}`);
} catch (error) {
    console.log(error)
}