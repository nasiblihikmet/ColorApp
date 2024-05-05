import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./store/GlobalProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <GlobalProvider> */}
      <Provider store={store}>
        <App />
      </Provider>

      {/* </GlobalProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
