import React from 'react';

class Img extends React.Component{
    render() {
        return (
           <div>
               <img src={this.props.picture}   />           
           </div>
                

          
        );
    }
    }

    export default Img;