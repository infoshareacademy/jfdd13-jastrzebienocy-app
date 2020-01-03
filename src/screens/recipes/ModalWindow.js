import React from "react";
import { Modal, Image, Button, Segment } from "semantic-ui-react";
import styles from "./ModalWindow.module.css";


class ModalWindow extends React.Component {

  render() {
   
    return (
    <Modal open={this.props.open} >
      <h1>{this.props.name}</h1>
      <Segment style={{display: 'flex', flexDirection: 'column'}}>
      
        

      <div className={styles.modalImage}><Image
                src={this.props.imageUrl}
                style={{
                  width: 300,
                  height: 300,
                  objectFit: "cover",
                  objectPosition: "center",
                
                  circular: false
                 
                  
                }}
                
                size="medium"
                floated="left"
              />
              </div>
            
            <div className={styles.modalText}>{this.props.description}</div>
            </Segment>
            <Modal.Actions>
                    <Button negative onClick={() => this.props.onCloseWindow()}>Zamknij</Button>
                    </Modal.Actions>
                    
            
    </Modal>);
  }
}

export default ModalWindow;
