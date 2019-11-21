import React from 'react'

export const fetchRecipes = () => {
  return (
    fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json')
      .then(response => response.json())
      // Zamienione przez JK
      .then(object =>
        Object.keys(object)
          //   .slice(0, 6)
          .map(key => {
            object[key].id = key
            return object[key]
          })
      )
  // .then((obj) => Object.values(obj))
  // .then(allRecipes => this.setState({ recipes: allRecipes }))
  // Dodane JK
  //   .then(data => console.log(data))
  )
}

// example of how to search methode with suggestions
// handleInputChange = () => {
//   this.setState(
//     {
//       query: this.search.value
//     },
//     () => {
//       if (this.state.query && this.state.query.length > 1) {
//         if (this.state.query.length % 2 === 0) {
//           this.getInfo()
//         }
//       } else if (!this.state.query) {
//       }
//     }
//   )
// }

// example how to render input with suggestions
//   render() {
//     return (
//       <form>
//         <input
//           placeholder="Search for..."
//           ref={input => this.search = input}
//           onChange={this.handleInputChange}
//         />
//         <Suggestions results={this.state.results} />
//       </form>
//     )
//   }
// }
