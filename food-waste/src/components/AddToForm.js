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
