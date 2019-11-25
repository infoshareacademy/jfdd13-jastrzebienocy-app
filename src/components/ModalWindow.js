import React from "react";
import { Modal, Image, Button, Segment } from "semantic-ui-react";


class ModalWindow extends React.Component {
  constructor(props){
    super(props);  
}

  render() {
   
    return (
    <Modal open={this.props.open} >
      <h1>{this.props.name}</h1>
      <Segment style={{display: 'flex', flexDirection: 'column'}}>
      
        

              <div><Image
                src={this.props.imageUrl}
                style={{
                  width: 200,
                  height: 200,
                  objectFit: "cover",
                  objectPosition: "center",
                  margin: "0 40% 2% 40%",
                  circular: false
                 
                  
                }}
                size="medium"
                floated="left"
              />
              </div>
            
            <div >{this.props.description}</div>
            </Segment>
            <Modal.Actions>
                    <Button negative onClick={() => this.props.onCloseWindow()}>Zamknij</Button>
                    </Modal.Actions>
                    
            
    </Modal>);
  }
}

export default ModalWindow;
