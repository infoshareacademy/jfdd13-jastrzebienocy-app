<<<<<<< HEAD
// import React from "react";
// import { Input } from "semantic-ui-react";

// class AddForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: ""
//         }
//         function get(id) {
//             fetch(`https://whatever-is-fine.firebaseio.com/user/${id}.json`, {
//                 method: 'GET'
//             })
//                 .then(res => res.json())
//                 .then(res => console.log(res));
//         }

//         function create() {
//             fetch('https://whatever-is-fine.firebaseio.com/user.json', {
//                 method: 'POST',
//                 body: JSON.stringify({ username: 'new username', age: 35 })
//             })
//                 .then(res => res.json())
//                 .then(res => console.log(res));
//         }

//         function update(id) {
//             fetch(`https://whatever-is-fine.firebaseio.com/user/${id}.json`, {
//                 method: 'PATCH',
//                 body: JSON.stringify({ age: 39 })
//             })
//                 .then(res => res.json())
//                 .then(res => console.log(res));
//         }

//         class App extends React.Component {
//             constructor(props) {
//                 super(props);
//                 this.state = {
//                     id: ''
//                 }
//             }

//     }
//         https://reactjsexample.com/tag/slider/

//     render() {
//         return (
//             <form className={"my-form"}>
//                 <Input
//                     //   onChange={this.changeHandler}
//                     //   value={this.state.form.firstName}
//                     type="text"
//                     name="firstName"
//                 />
//                 <Input
//                     //   onChange={this.changeHandler}
//                     //   value={this.state.form.lastName}
//                     type="text"
//                     name="lastName"
//                 />
//                 <Input
//                     //   onChange={this.changeHandler}
//                     //   value={this.state.form.email}
//                     type="email"
//                     name="email"
//                     error
//                 />
//                 <button type="submit"> Add Receipe </button>
//             </form>
//         );
//     }
// }
// // export default AddForm;
=======
import React from "react";
import { Input } from "semantic-ui-react";
import styles from './AddToForm.module.css'






class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
            name: "",
            category: "",
            description: "",
            products: "",
            cookingTime: "",
            weight: "",
            portions: ""
            
        
    }
} 

 changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({

            ...this.state,
            [name]: value
            
          
        });
      };
 


      create() {
        fetch(`https://myfirstproject-b5855.firebaseio.com/recipe.json`, {
          method: 'POST',
          body: JSON.stringify({
            recipe: this.state
          })
        })
        .then(res => res.json())
        .then(res => console.log(res));
      }     

    //   get(recipe) {
    //     fetch(`https://myfirstproject-b5855.firebaseio.com/${recipe}.json`, {
    //       method: 'GET'
    //     })
    //     .then(res => res.json())
    //     .then(res => console.log(res));
    //   }

   render() {
       return(
           
        <form onSubmit={e => {
            e.preventDefault();
            this.create();
        }} className={styles.myForm}>
        <Input
          onChange={this.changeHandler}
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Nazwa potrawy"
        />
        <Input
          onChange={this.changeHandler}
          value={this.state.category}
          type="text"
          name="category"
          placeholder="Rodzaj kuchni"
        />
        <Input
          onChange={this.changeHandler}
          value={this.state.description}
          type="text"
          name="description"
          placeholder="Krótki opis przepisu"
        />
        <Input
          onChange={this.changeHandler}
          value={this.state.products}
          type="text"
          name="products"
          placeholder="Składniki"
        />
     
         <Input
          onChange={this.changeHandler}
          value={this.state.cookingTime}
          type="text"
          name="cookingTime"
          placeholder='Czas przygotowania...'
        />
        <Input
        onChange={this.changeHandler}
        label={{ basic: true, content: 'kg' }}
        labelPosition='right'
        placeholder='wpisz wagę...'
        name="weight"
        value={this.state.weight}
        />
    <Input
          onChange={this.changeHandler}
          value={this.state.portions}
          type="number"
          name="portions"
          placeholder='Ilość porcji ...'
        />
        <button type="submit">Add Receipe</button>
       
      </form>
      
        
    
    
       )
    }
}

export default AddForm ;
>>>>>>> 25775259abe258db00b6bad38f2318fd80cc16b5
