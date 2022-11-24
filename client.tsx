import { React, ReactDOM, BrowserRouter } from "./dep.ts";
import App from "./App.tsx";

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);