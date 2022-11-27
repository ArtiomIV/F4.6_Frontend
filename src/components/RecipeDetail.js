import React from "react"
import { useLocation } from 'react-router-dom'
import "../styles/RecipeDetails.css"
import logo from '../img/palceholder.jpg'


function RecipeDetails(props) {

    const location = useLocation()

    return (
        <div className="recipedetail__wrapper">
            <div className="recipedetail__wrapper__item1">
                <h1 className="recipedetail__wrapper__wrapper2__title">{location.state.name}</h1>
                <img height="300px" width="500px" src={logo} />
            </div>
            <div className="recipedetail__wrapper__item2">
                <p className="recipedetail__wrapper__desc" >{location.state.desc}</p>
            </div>
            <div className="recipedetail__wrapper__item3">
                <h2>Ingredients</h2>
                {location.state.products?.map(item => <li className="recipedetail__wrapper__wrapper2_product product" key={item.product} >{item.product} {item.amount}g</li>)}
            </div>
            <div className="recipedetail__wrapper__item4">
                <h2>Nutrition Facts</h2>
                <div className="recipedetail__wrapper__item4__nutritonfacts">
                    <div className="recipedetail__wrapper__item4__calories fact">
                        <p>Calories</p>
                        <p>{location.state.calories} g</p>
                    </div>
                    <div className="recipedetail__wrapper__item4__fat fact">
                        <p>Fat</p>
                        <p>{location.state.fat} g</p>
                    </div>
                    <div className="recipedetail__wrapper__item4__carbs fact">
                        <p>Carbs</p>
                        <p>{location.state.carbs} g</p>
                    </div>
                    <div className="recipedetail__wrapper__item4__protein fact">
                        <p>Protein</p>
                        <p>{location.state.protein} g</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails