import React from 'react';
import DragDrop from './DragDrop';
import Submitted from './submitted';
import SyncIcon from '@material-ui/icons/Sync';
import DoneIcon from '@material-ui/icons/Done';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Email from './modal';

class UIModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDisplay: true,
      modalDisplay: false,
      numModal: false,
      data: 0,
      // dataObject:{},
      mail: "",
      index: 0,
      items: [
        { no: 1 },
        { no: 2 },
        { no: 3 },
        { no: 4 },
        { no: 5 },
        { no: 6 },
        { no: 7 },
        { no: 8 },
        { no: 9 },
        { no: 10 }
      ],
      texts: [
        { text: "Friends and Family" },
        { text: "Relationships" },
        { text: "Wealth" },
        { text: "Personal and Growth" },
        { text: "Health" },
        { text: "Fun and Recreation" },
        { text: "Possession" },
        { text: "Career" }
      ],
      images: [
        { src: 'wheel-of-life-react/img1.png' },
        { src: 'wheel-of-life-react/img2.png' },
        { src: 'wheel-of-life-react/img3.png' },
        { src: 'wheel-of-life-react/img4.png' },
        { src: 'wheel-of-life-react/img5.png' },
        { src: 'wheel-of-life-react/img6.png' },
        { src: 'wheel-of-life-react/img7.png' },
        { src: 'wheel-of-life-react/img8.png' }
      ],
      dropped: [null, null, null, null, null, null, null, null]
    }
  }

  submit(e) {
    var goodToGo = 0;
    let { dropped } = this.state

    if (dropped.includes(null))
      goodToGo = 0;
    else
      goodToGo = 1;

    if (goodToGo == 1) {
      this.setState({
        toggleDisplay: false
      });
    }
    else {
      alert("Please fill all the tiles");
    }
  }
  
  email(e) {
    this.setState({
      modalDisplay: true
    });
  }

  refreshPage = () => {
    window.location.reload();
  }

  openModal = () => this.setState({ modalDisplay: true });

  render() {
    const { toggleDisplay, modalDisplay, numModal } = this.state;

    return (
      <div>
        <div className="header">
          <img id="logo" src={process.env.PUBLIC_URL+"/wings2life.png"}/>
          <div id="line">
            <div className="head">Wheel Of Life</div>
            {toggleDisplay ? <DoneIcon onClick={(e) => this.submit(e)} id="done" /> : <MailOutlineIcon id="mail" onClick={(e) => this.email(e)} />}
            <SyncIcon onClick={this.refreshPage} id="refresh" />
          </div>
        </div>
        <div>{toggleDisplay ? <DragDrop state={this.state} /> : <Submitted dropped={this.state.dropped} />}</div>
        <div>{modalDisplay ? <Email
          show={modalDisplay}
          mail={this.state.mail}
          labels={this.state.texts}
          values={this.state.dropped}
        /> : null}</div>
      </div>
    );
  }
}

export default UIModel;

