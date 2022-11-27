import React, {useState, useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

function HomeByCategory(props) {

    let [recipes, setRecipes] = useState([{id:''}])

    const location = useLocation()
    const search = location.search
    const query = new URLSearchParams(search)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipes/recipes/?category=${query.get('category')}`)

        .then(res => {
            setRecipes(res.data.results)
            
        })

        .catch (error => {
            console.log(error)
        })

    })

    return (

        <Table className="homebycategory__recipestable">
            <thead className="homebycategory__recipestable__thead"><tr><th>Name</th><th>Category</th></tr></thead>
            <tbody className="homebycategory__recipestable__tbody">

                {recipes.map(item =>

                    <tr key={item.id} className="homebycategory__recipestable__tbody__trow">
                        <td className="homebycategory__recipestable__tbody__trow__name tcolumn"><Link to={`/RecipeDetails/${item.id}`} state={item}>{item.name}</Link></td>
                        <td className="homebycategory__recipestable__tbody__trow__category tcolumn">{item.category}</td>
                    </tr>
                            
                )}
            </tbody>
        </Table>
    )
}

export default HomeByCategory