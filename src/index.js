import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import './Style.css'
import { AppProvider } from "./components/Context/ProductContext";
// ReactDOM.render(
// <>
// <App/>
// </>
//   ,document.getElementById('root')
// )


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(
<AppProvider>
<App/>
</AppProvider>

)