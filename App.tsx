import { React } from "./dep.ts";

const App = () => 
    <div>
        <form action="/color" method="post">
            <input type="text" placeholder="Ingrese un color!" />
            <input type="submit" />
        </form>
    </div>

export default App;