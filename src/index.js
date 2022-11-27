import React from "react";
import { createRoot } from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./components/App"
import Home from "./components/Home"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import recipes from "./redux/reducers/recipes"


const store = createStore(recipes);

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)