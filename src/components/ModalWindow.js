import React from "react";
import { Modal, Image } from "semantic-ui-react";


class ModalWindow extends React.Component {
  render() {
    console.log("hej");
    return (
    <Modal open={this.props.open}>
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
            <p>{this.props.name}</p>
    </Modal>);
  }
}

export default ModalWindow;
