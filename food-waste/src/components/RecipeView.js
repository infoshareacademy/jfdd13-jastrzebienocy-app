import React from 'react';
import styles from './RecipeView.module.css'
import {Segment, Image, Icon} from 'semantic-ui-react'

let portions = (count) => {
    let list = [];
    for (let i=0; i<count; i+= 1){
        list.push(<Icon name='user'/>)
    }
    return list;
}
class RecipeView extends React.Component{
    render(){
        return( 
                <Segment className={styles.Wrapper}>
                    <div >
                    <div>
                        <Image src={this.props.recipe.imageUrl}  className ={styles.Img} size='small' floated='left' />
                    </div>
                    <div className={styles.Text}>
                        <div className={styles.NameRecipe}> 
                            <p>{this.props.recipe.name}</p>
                         </div>
                    <div> <p>Produkt bazowy: {this.props.recipe.products}</p></div>
                    <div> <p>Ilość: {this.props.recipe.weight}</p></div>
                    <div> <p>Kuchnia: {this.props.recipe.category}</p></div>
                </div>
                </div>
                
                <div className={styles.TimeAndPortions}> 
                     <div><Icon name='time' />{this.props.recipe.cockingTime}</div>
                     <div>{portions(this.props.recipe.portions || 1)}</div>
                </div>
                </Segment>
        )
    }
}

export default RecipeView;