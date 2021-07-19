import React, { Component } from 'react';
import Submitted from './submitted';
import { Modal, Button, ModalBody } from "react-bootstrap";

class DragDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.state


  }

  onDragStart = (e, v) => {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/plain", v);
  }

  allowDrop = ev => {
    ev.preventDefault();
  }

  onDropTop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    let { dropped } = this.state;
    dropped[e.target.id - 1] = data;
    this.setState({ dropped });
  }

  showValue = (e) => {
    // e.preventDefault();
    // var data = e.target.value;
    // const data = e.dataTransfer.getData("text/plain");
    // let { dropped } = this.state;
    // dropped[e.target.id - 1] = data;
    // this.setState({ dropped });
    let data = e.target.value;
    let { dropped } = this.state;
    dropped[e.target.id - 1] = data;
    this.setState({ dropped });
    this.closeModal();
    console.log(dropped);
  }

  openModal = () => {
    this.setState({ numModal: true });
  }

  closeModal = () => this.setState({ numModal: false });

  render() {
    const { items, dropped, texts } = this.state;
    var tempHtml = [];
    for (var i = 0; i < texts.length; i++) {
      var tileValue = null;
      if (dropped[i])
        tileValue = <div className="child1" id={"a" + (i + 1)}></div>
      {
        tempHtml.push(
          <div className="tile" onClick={() => this.openModal()} onDragOver={this.allowDrop} onDrop={(e) => this.onDropTop(e)}>
            {tileValue}
            <div className="child2" id={i + 1}>
              {this.state.texts[i].text}
              <hr className="hr" />
              {dropped[i]}

            </div>
          </div>
        )
      }
    }
    return (
      <div>
        <div className="labels">
          {
            items.map((item) => {
              return <p className="num" draggable="true" onDragStart={(e) => this.onDragStart(e, item.no)} >{item.no}</p>
            })
          }
        </div>
        <div className="parent">
          {tempHtml}
        </div>
        <Modal show={this.state.numModal}>
          <Modal.Header >
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="num1">
              <Button value="1" onClick={e => this.showValue(e)} className="l1">1</Button>
              <Button value="2" onClick={e => this.showValue(e)} className="l1">2</Button>
              <Button value="3" onClick={((e) => this.showValue(e))} className="l1">3</Button>
              <Button value="4" onClick={((e) => this.showValue(e))} className="l1">4</Button>

            </div>
            <div className="num2">
              <Button value="5" onClick={((e) => this.showValue(e))} className="l1">5</Button>
              <div className="title">Select The Number</div>
              <Button value="6" onClick={((e) => this.showValue(e))} className="l1">6</Button>
            </div>
            <div className="num3">
              <Button value="7" onClick={((e) => this.showValue(e))} className="l1">7</Button>
              <Button value="8" onClick={((e) => this.showValue(e))} className="l1">8</Button>
              <Button value="9" onClick={((e) => this.showValue(e))} className="l1">9</Button>
              <Button value="10" onClick={((e) => this.showValue(e))} className="l1">10</Button>

            </div>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}
export default DragDrop;