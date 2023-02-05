import React from "react";
import Papa from "papaparse";
import Modal from "../Modal/ModalR";
import "../UI/Mobile.css"
import Loader from "../Loader/Loader";
import classes from "./CaverPage.module.css"
import { Link } from "react-router-dom";
import Img from "../UI/Img";
import AudioPlayer from "../Player/AudioPlayer"
// import SinglOne from "../SinglOne/SinglOne";
class CaverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [0],
      show: false,
      // close: false,
      selected: undefined,
      songsEror: ""
    }
    this.updateData = this.updateData.bind(this);

  }

  handleShowDialog = (id) => {
    this.setState({ ...this.state, selected: id, show: true });
    // console.log("cliked show");
  };
  handleHideDialog = () => {
    this.setState({ ...this.state, show: false });
    // console.log("closed hide");
  };

  componentDidMount() {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5F_b9Zjd0QP9o2T6rT91qvpf8DzNOtvPYIIQfPbUqQlg6jU_mMT2VVCXPv14vVnQQigGeS-_Tz5lr/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,

        complete: this.updateData,
        error: (error) => {
          console.error(error);
        this.setState(error)
      }
      }
      
    );
  }

  updateData = (result) => {
    
    const data = result.data
    this.setState({ songs: data });

  }
 
  render() {
   const playList = this.state.songs.length <=  1 ? null : (
                  <AudioPlayer songs={this.state.songs}>{console.log("aAud",this.state.songs)}</AudioPlayer>   
                );
                
    
    return (
      <div className="device device-iphone-x">   
        <div className="device-frame">
          <div className="device-content">
            <div className={classes.row}>
              
              
              <div className={classes.column50}>
             
               {this.state.songs?.map((song) => (
                  <div className={classes.media}
                    key={song.id} >
                    <div className={classes.mediaImage_modal} onClick={() => {
                      this.handleShowDialog(song.id);
                    }}>
                            <Img imgUrl={song.photo} width={80} imgAlt={song.name}  />
                          </div>
                    <span>{song.name}</span>
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
                           <video src={song.video1} id={classes.videoFrame} controls={true} type="video/mp4" ></video>                        
                         </div>					 
						              <p>{song.video_name2}</p>					 
                         <div className={[
                           classes.videoBlock,
                           song.video2 ? '' : classes.mediaHidden].join(' ')
                         }>
                           <video src={song.video2} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
						   
                           <p>{song.video_name3}</p>
                           <div className={[
                           classes.videoBlock,
                           song.video3 ? '' : classes.mediaHidden].join(' ')
                         }>
                           <video src={song.video3} id={classes.videoFrame} controls={true} type="video/mp4" ></video>
                            </div>
                         </div>   

                         <div className={classes.tziTata}>
                           <img className={classes.tziImage} src={song.picture} width={80} alt="Цитаты" />
                         </div>
                        </div>
                      </Modal>
 
                    )}
                    
                  </div>
                )
                )
                } 
               <div>
               {playList}
                 <Link to="/">
                <button className={classes.btnHome}>🏛</button>
              </Link>
               </div>     
              </div>
            </div>
          </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-header">
          <div className="device-sensors"></div>
        </div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    )
  }
}

export default CaverPage;
