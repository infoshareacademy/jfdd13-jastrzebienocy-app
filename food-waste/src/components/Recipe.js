import React from 'react';


class Recipe extends React.Component{
    render(){
        return(
            <div>
                    <div> <p>Potrzebne produkty: {this.props.recipe.products}</p></div>
                    <div> <p>ILość: {this.props.recipe.weight}</p></div>
                    <div> <p>Kuchnia: {this.props.recipe.category}</p></div>
                    <hr/>
                    
            </div>
        )
    }
}

export default Recipe;