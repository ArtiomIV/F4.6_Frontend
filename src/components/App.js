import React, {useEffect} from "react";
import axios from "axios";
import {Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import RecipeDetails from "./RecipeDetail";
import HomeByCategory from "./HomeByCategory"
import "../styles/App.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            categories: []
        }

        this.category = ''
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/recipes/categories/')

        .then(res => {
            //console.log(res.data)
            this.setState({categories: res.data.results})
        })

        .catch(error => {
            console.loge(error)
        })
    }

    render = () => {
        return (
            <>
                <div className="header__wrapper">
                    <h1 className="header__wrapper__title">recipesall</h1>
                    <nav className="header__wrapper__navigation">
                        <Link to="/">Home</Link>
                        <div className="header__wrapper__navigation__dropdown">
                            <button className="header__wrapper__navigation__dropdown__button">Categories</button>
                            <div className="header__wrapper__navigation__dropdown__content">
                                {this.state.categories.map(item => <Link to={`/Sorted?category=${item.id}`} key={item.id} ><p>{item.name}</p></Link>)}
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="app__separator" />
                <div id='app__categories'></div>
                <div className="app__componentswrapper">
                    <Routes>
                        <Route path="/RecipeDetails/:id" element={<RecipeDetails />}/>
                        <Route path="/Sorted" element={<HomeByCategory />}/>
                        <Route path="/" element={<Home />}/>
                    </Routes>  
                </div> 
            </>                 
        )
    }
}

export default App