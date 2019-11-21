import React from 'react';

 class Show extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                list: []
            }
        }
    

    componentDidMount() {
        fetch(`https://myfirstproject-b5855.firebaseio.com/recipe.json`)
            .then(res => res.json())
            .then(obj => Object.values(obj))
            .then(list => this.setState({list: list}));
    }

    render() {
        return (<div>
            {this.state.list.map(list => <p>{list.name} {list.description} {list.category} {list.products} {list.cookingTime} {list.weight} {list.portions} </p>)}
        </div>)
    }
}


 


export default Show;