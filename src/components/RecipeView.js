import React from "react";
import styles from "./RecipeView.module.css";
import { Segment, Image, Icon } from "semantic-ui-react";
import Heart from "./Heart";

let portions = count => {
  let list = [];
  for (let i = 0; i < count; i += 1) {
    list.push(<Icon name="user" size="large" />);
  }
  return list;
};
class RecipeView extends React.Component {
  render() {
    return (
      <div>
        <Segment
          className={styles.Wrapper}
          onClick={() => {
            console.log("dej mnie przepis");
          }}
        >
          <div className={styles.Heart}>
            <div>
              <Image
                src={this.props.recipe.imageUrl}
                className={styles.Img}
                style={{
                  width: 200,
                  height: 200,
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                size="medium"
                floated="left"
              />
            </div>
            <div className={styles.Text}>
              <div className={styles.NameRecipe}>
                <p>{this.props.recipe.name}</p>
                <div className={styles.HeartInRecipe}>
              <Heart />
            </div>
              </div>
              <div className={styles.ShortDescription}>
                <div>
                  {" "}
                  <p>Produkt bazowy: {this.props.recipe.products}</p>
                </div>
                <div>
                  {" "}
                  <p>Ilość: {this.props.recipe.weight} g</p>
                </div>
                <div>
                  {" "}
                  <p>Kuchnia: {this.props.recipe.category}</p>
                </div>
              </div>
            </div>
          </div>

          
            <div className={styles.TimeAndPortions}>
              <div>
                <Icon name="time" size="large" style={{ color: "#8BC34A" }} />
                {this.props.recipe.cookingTime} min
              </div>
              <div>{portions(this.props.recipe.portions || 1)}</div>{" "}
            </div>
            
          
        </Segment>
      </div>
    );
  }
}

export default RecipeView;
