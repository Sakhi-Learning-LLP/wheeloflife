import React from 'react';
import Submitted from './submitted'

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

  render() {
    const { items, dropped, texts } = this.state;
    var tempHtml = [];
    for (var i = 0; i < texts.length; i++) {
      var tileValue = null;
      if (dropped[i])
        tileValue = <div className="child1" id={"a" + (i + 1)}>{dropped[i]}</div>
      tempHtml.push(
        <div className="tile" onDragOver={this.allowDrop} onDrop={(e) => this.onDropTop(e)}>
          {tileValue}
          <div className="child2" id={i + 1}>
            {this.state.texts[i].text}
          </div>
        </div>
      )
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
      </div>
    )
  }

}
export default DragDrop;