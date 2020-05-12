import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
class ModalExample extends Component {
  componentDidMount = () => {
    // this.props.handleDelete();
  }
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Button className="ui red basic button" onClick={this.show(true)}>Delete</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Content>
            <Modal.Description>
              <Header>DELETE POST</Header>
              <p>Bạn có chắc muốn xóa bài Post ? </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              No
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yes"
              onClick={()=>{
                this.props.handleDelete();
                this.close()}
              }
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExample;