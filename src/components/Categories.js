import axios from "axios";
import React, {useState} from "react"
import "../styles/Categories.css"

class Categories extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }

        this.getCategories()
    }

    getCategories = () => {

        axios.get('http://127.0.0.1:8000/recipes/categories/')

        .then(res => {
            console.log(res.data)
            this.setState({categories: res.data.results})
        })

        .catch(error => {
            console.loge(error)
        })
        
    }

    render = () => {
        return (
            <div className="categories__wrapper">
                {this.state.categories.map(item => <h3 key={item.id}>{item.name}</h3>)}
            </div>
        )
    }
}

export default Categories 