import React from 'react';
import { Modal, Button } from "react-bootstrap";

class DragDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.state
  }

  openModal = (e) => {
    let { index } = this.state;
    index = e.target.id - 1;
    this.setState({ numModal: true, index: index });
    console.log(index + "open");
  }

  showValue = (e) => {
    let data = e.target.value;
    console.log(data);
    let { index } = this.state;
    let { dropped } = this.state;
    dropped[index] = data;
    console.log(index + "haii");
    this.setState({ dropped: dropped });
    this.closeModal();
    console.log({ dropped });
  }

  closeModal = () => this.setState({ numModal: false });

  render() {
    const { items, dropped, texts, data } = this.state;
    var tempHtml = [];
    for (var i = 0; i < texts.length; i++) {
      var tileValue = null;
      if (dropped[i])
        tileValue = <div className="child1" id={"a" + (i + 1)}></div>
      {
        tempHtml.push(
          <div className="tile" onClick={(e) => this.openModal(e)}>
            {tileValue}
            <div className="child2" id={i + 1}>
              {this.state.texts[i].text}
              {/* {<img src={this.state.images[i].src} />} */}
              <div className="child3">
                {dropped[i]}
              </div>
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
        <Modal id="numModal" show={this.state.numModal} onHide={() => this.closeModal()} >
          <Modal.Body>
            <div className="num1">
              <Button value="1" onClick={e => this.showValue(e)} className="l1">1</Button>
              <Button value="2" onClick={e => this.showValue(e)} className="l1">2</Button>
              <Button value="3" onClick={((e) => this.showValue(e))} className="l1">3</Button>
              <Button value="4" onClick={((e) => this.showValue(e))} className="l1">4</Button>

            </div>
            <div className="num2">
              <Button value="5" onClick={((e) => this.showValue(e))} className="l1">5</Button>
              <div className="title"></div>
              <Button value="6" onClick={((e) => this.showValue(e))} className="l1">6</Button>
            </div>
            <div className="num3">
              <Button value="7" onClick={((e) => this.showValue(e))} className="l1">7</Button>
              <Button value="8" onClick={((e) => this.showValue(e))} className="l1">8</Button>
              <Button value="9" onClick={((e) => this.showValue(e))} className="l1">9</Button>
              <Button value="10" onClick={((e) => this.showValue(e))} className="l1">10</Button>

            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }

}
export default DragDrop;