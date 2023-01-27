import React from "react";
import Papa from "papaparse";
import Modal from "../Modal/ModalR";
import "../UI/Mobile.css"
import Loader from "../Loader/Loader";
import classes from "./CaverPage.module.css"
// import SinglOne from "../SinglOne/SinglOne";
class CaverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      show: false,
      close: false,
      selected: undefined
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
                    }} />
                    <p>{song.name}</p>
                    {this.state.show && this.state.selected === song.id && (
                      <Modal show={this.state.show}
                        songs={this.state.songs} selId={this.state.selected}
                        style={{ position: "absolute" }}
                        animation={true}>
                        <button close={this.state.close} className="toggle-button" onClick={this.handleHideDialog}>
                          X
                        </button>
                        <div className={classes.mediaSong} key={song.id}>
                          <img className={classes.mediaImage_modal} src={song.photo} width={80} alt={song.name} />
                          <div className={classes.headerSong}>
                            <p>{song.name}</p></div>
                          <a className={[classes.linkTo, song.linkTo ? '' : classes.mediaHidden].join(' ')} href={song.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
                          <div className={[
                            classes.audioBlock,
                            song.audio1 ? '' : classes.mediaHidden].join(' ')
                          }>
                            <p>{song.audio_name1}</p>
                            <audio controls className={song.audio1 ? '' : classes.mediaHidden}
                              src={song.audio1} type="audio/mpeg" />
                            <p>{song.audio_name2}</p>
                            <audio controls className={song.audio2 ? '' : classes.mediaHidden}
                              src={song.audio2} type="audio/mpeg" />
                            <p>{song.audio_name3}</p>
                            <audio controls className={song.audio3 ? '' : classes.mediaHidden}
                              src={song.audio3} type="audio/mpeg" />
                          </div>

                          <div className={[
                            classes.videoBlock,
                            song.video1 ? '' : classes.mediaHidden].join(' ')
                          }>
                            <p>{song.video_name1}</p>
                            <video className={song.video1 ? '' : classes.mediaHidden} src={song.video1} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                            <p>{song.video_name2}</p>

                            <video className={song.video2 ? '' : classes.mediaHidden} src={song.video2} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                            <p>{song.video_name3}</p>

                            <video className={song.video3 ? '' : classes.mediaHidden} src={song.video3} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                          </div>
                          <div className={classes.tziTata}>
                            {/* <img className={classes.tziImage} src={song.picture_tzitata} width={80} alt="Цитаты" /> */}
                            <p>{song.picture}</p>
                          </div>
                        </div>


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
