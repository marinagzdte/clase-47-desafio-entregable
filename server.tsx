import { Application, Router } from 'https://deno.land/x/oak@v7.3.0/mod.ts';
import { ReactDOMServer, React } from "./dep.ts";
import App from "./App.tsx";

const app = new Application();
const port: number = 8000;

const router = new Router();
router.get("/", (context) => {
    context.response.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
        <title>Deno server</title>
    </head>
    <body >
        <div id="root">${ReactDOMServer.renderToString(<App />)}
        </div>
    </body>
    </html>`;
});

const colors : Array<string> = []
router.post("/color", (context) => {
    console.log(context.request.body)
    colors.push(context.request.body.arguments.color)
    context.response.body = JSON.stringify({colors: colors})
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`server is running on port: ${port}`);