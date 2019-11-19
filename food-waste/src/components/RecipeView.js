import React from 'react';
import Img from './Img';
import styles from './RecipeView.module.css'

class RecipeView extends React.Component{
    render(){
        return(
            <div className={styles.GridConrainer}>
                <div className={styles.Wrapper}>
                    <div className={styles.Img}>
                        <Img picture={this.props.recipe.imageUrl} />
                </div>
                <div className={styles.Text}>
                    <div className={styles.NameRecipe}> 
                        <p>{this.props.recipe.name}</p>
                    </div>
                    <div> <p>Potrzebne produkty: {this.props.recipe.products}</p></div>
                    <div> <p>ILość: {this.props.recipe.weight}</p></div>
                    <div> <p>Kuchnia: {this.props.recipe.category}</p></div>
                </div>
                </div>
                <div className='footerRecipe'> 
                    <div> // czas</div>
                    <div> //porcje</div> 
                </div>
                   
            </div>
        )
    }
}

export default RecipeView;