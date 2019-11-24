import React from "react";
import { Modal, Image, Button } from "semantic-ui-react";


class ModalWindow extends React.Component {
  constructor(props){
    super(props);
    
}
  onClick() {  
    this.setState({ open: false});
}

  render() {
   
    return (
    <Modal open={this.props.modal}>
        <h1>{this.props.name}</h1>
         <div>
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
            </div>

            <Modal.Actions>
                    <Button negative onClick={() => this.onClick()}>Zamknij</Button>
                    </Modal.Actions>
            
    </Modal>);
  }
}

export default ModalWindow;
