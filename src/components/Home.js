import React from "react"
import { connect } from "react-redux";
import axios from "axios"
import Table from "react-bootstrap/Table"
import { Link } from "react-router-dom";
import "../styles/Home.css"


class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/recipes/recipes/')

        .then(res => {
            console.log(res.data.results)
            this.props.addElement(res.data.results)
        })

        .catch (error => {
            console.log(error)
        })

    }
    
    render = () => {
        return (
                <Table className="home__recipestable">
                    <thead className="home__recipestable__thead"><tr><th>Name</th><th>Category</th></tr></thead>
                    <tbody className="home__recipestable__tbody">

                        {this.props.recipes?.map(item => item.map(item => 

                            <tr className="home__recipestable__tbody__trow" key={item.id}>
                                <td className="home__recipestable__tbody__trow__name tcolumn"><Link to={`/RecipeDetails/${item.id}`} state={item}>{item.name}</Link></td>
                                <td className="home__recipestable__tbody__trow__category tcolumn">{item.category}</td>
                            </tr>
                            
                            )
                        )}
                    </tbody>
                </Table>
        )
    }
}

export default connect(

    state => ({
        recipes: state
    }),

    dispatch => ({
        addElement: (e) => {
            dispatch({type:'ADD_RECIPES', payload: e})
        },
        deleteElement: (e) => {
            dispatch({type: 'DELETE_RECIPES', payload: e})
        }
    })

)(Home)