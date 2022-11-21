import React, {useEffect} from "react";
import {Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import RecipeDetails from "./RecipeDetail";
import "../styles/Header.css"

class App extends React.Component {
    render = () => {
        return (
            <>
                <div className="header__wrapper">
                    <h1 className="header__wrapper__title">recipesall</h1>
                    <nav className="header__wrapper__navigation">
                        <Link to="/">Home</Link>
                        <button src="#">Categories</button>
                    </nav>
                </div>
                <div className="app__separator" />
                <div id='app__categories'><Categories /></div>
                <div>
                    <Routes>
                        <Route path="/RecipeDetails" element={<RecipeDetails />}/>
                        <Route path="/" element={<Home />}/>
                    </Routes>  
                </div> 
            </>                 
        )
    }
}

export default App