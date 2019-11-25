import React from "react";
import { Modal, Image, Button, Segment } from "semantic-ui-react";


class ModalWindow extends React.Component {
  constructor(props){
    super(props);
    // this.closeWindow = closeWindow()
    
    
}
  
  onClick() {  
  
   

}

  render() {
   
    return (
    <Modal open={this.props.open} >
      <Segment styles={{display: 'flex'}}>
      
        <h1>{this.props.name}</h1>

         
              <Image
                src={this.props.imageUrl}
                style={{
                  width: 200,
                  height: 200,
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                size="medium"
                floated="left"
              />
            
            <div >{this.props.description}</div>
            </Segment>
              
          

            <Modal.Actions>
                    <Button negative onClick={() => this.props.onCloseWindow()}>Zamknij</Button>
                    </Modal.Actions>
            
    </Modal>);
  }
}

export default ModalWindow;
