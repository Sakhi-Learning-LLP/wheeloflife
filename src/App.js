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
      // dataObject:{},
      mail:"",
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
      dropped: [null, null, null, null, null, null, null, null]
    }
  }
   
  submit(e) {
    var goodToGo = 0;
    let { dropped } = this.state
    // for(var i =0;i<dropped.length;i++){
    //   if(this.state.dropped[i] != null){
    //     goodToGo = 1;
    //   }
    //   else{
    //     goodToGo = 0;
    //   }
    // }

    if( dropped.includes(null))
      goodToGo = 0;
    else
      goodToGo = 1;

    if( goodToGo == 1 ){
      this.setState({
        toggleDisplay: false
      }); 
    }
    else{
      alert("Please fill all the tiles");
    }
    // let {dataObject,texts,dropped} = this.state;
    // for(var i = 0;i<texts.length;i++){

    // }
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
    const { toggleDisplay, modalDisplay } = this.state;

    return (
      <div>
        <div className="header">
          <img id="logo" src='../public/wings2life.png' />
          {/* <img id="logo" src='D:/Projects/wheel-of-life-react/public' /> */}
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

