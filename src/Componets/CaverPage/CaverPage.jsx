import React from "react";
import Papa from "papaparse";
import Modal from "../Modal/ModalR";
import "../UI/Mobile.css"
import Loader from "../Loader/Loader";
import classes from "./CaverPage.module.css"
class CaverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      show: false,
      close: false,
    }
    this.updateData = this.updateData.bind(this);

  }

  handleShowDialog = (id) => {
    this.setState({ ...this.state, selected: id, show: true });
    console.log("cliked show");
  };
  handleHideDialog = () => {
    this.setState({ ...this.state, show: false });
    console.log("closed hide");
  };

  componentDidMount() {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5F_b9Zjd0QP9o2T6rT91qvpf8DzNOtvPYIIQfPbUqQlg6jU_mMT2VVCXPv14vVnQQigGeS-_Tz5lr/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,

        complete: this.updateData
      }
    );
  }

  updateData = (result) => {
    console.log("RES", result.data);
    const data = result.data
    this.setState({ songs: data });

  }

  render() {
    if (this.state.songs.length === 0) {
      return <Loader />
      //  <h1>load...</h1>

    }
    console.log(this.state.songs)
    return (
      <div className="device device-iphone-x">
        <div className="device-frame">
          <div className="device-content">
            <div className={classes.row}>
              <div className={classes.column50}>
              {this.state.songs.map((song) => (

                <div className={classes.media}

                  key={song.id} >
                    <img className={classes.mediaImage} src={song.photo} width={80} onClick={() => {
                    this.handleShowDialog(song.id);
                    // alert(song.name)
                  }}  />
                  <p>{song.name}</p> 
                   
                  
                  {/* <audio controls 
            src={song.audio1} type="audio/mpeg" /> */}
                  {this.state.show && this.state.selected === song.id && (
                    <Modal  show={this.state.show}
                      style={{ position: "absolute" }}
                      animation={true}>
                      <button close={this.state.close} className="toggle-button" onClick={this.handleHideDialog}>
                        close
                      </button> {song.name}
                      <audio controls
                        src={song.audio1} type="audio/mpeg" />
                    </Modal>

                  )}

                </div>

              )
              )
              }
</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CaverPage;
