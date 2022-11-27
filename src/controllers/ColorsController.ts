import { ColorsDao } from "../dao/ColorsDao.ts";
import { Handlebars, Context } from "../deps.ts";
// First, create instance of Handlebars

const colors = new ColorsDao();
const handlebars = new Handlebars();

const get = async (ctx: Context) => {
    try {
        ctx.response.headers.append("Content-Type", "text/html")
        ctx.response.body = await handlebars.renderView('index', { colors: colors.getColors() })
    } catch(err) {
        console.log(err)
    }
}

const post = async (ctx: Context) => {
    try {
        const body = await ctx.request.body();
        const data = await body.value
        colors.addColor(await data.get("color"))
        ctx.response.redirect("/");
    } catch (error) {
        console.log(error)
    }
}

export { get, post }