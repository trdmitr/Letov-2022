import React from "react";
import Papa from "papaparse";
// import ReactPlayer from "react-player";
import Modal from "../Modal/ModalR";
import "../UI/Mobile.css"
// import Loader from "../Loader/Loader";
import classes from "./CaverPage.module.css"
import { Link } from "react-router-dom";
import Img from "../UI/Img";
// import AudioList from "../Player/PlayList"
import {audioSource} from "../Utils/singContent"
import {videoSource} from "../Utils/singContent"
import {playList} from "../Utils/singContent"

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
    // console.log(result.data.length);
    const data = result.data
    this.setState({ songs: data });

  }

  render() {
    // const audioSorce = (x, y) => {
    //   return (
    //     <div>
    //       <p>{y}</p>
    //       <audio controls className={x ? '' : classes.mediaHidden}
    //         src={x} type="audio/mpeg" />
    //     </div>
    //   )
    // }
    // // const videoSorce = x => x.includes('youtu.be') ? <ReactPlayer className={x ? '' : classes.mediaHidden} id={classes.videoFrame} url={x} controls={true} /> 
    // :  <video src={x} id={classes.videoFrame} controls={true} type="video/mp4" ></video>;
    // const videoSorce = (x, y) => 
    // <div>
    // <p>{y}</p>
    // {x.includes('youtu.be') ? <ReactPlayer className={x ? '' : classes.mediaHidden} id={classes.videoFrame} url={x} controls={true} /> 
    // :  <video className={[classes.videoBlock, x ? '' : classes.mediaHidden].join(' ')} src={x} controls={true} type="video/mp4" ></video>}
    // </div>

    
    return (
      <div className="device device-iphone-x">
        <div className="device-frame">
          <div className="device-content">
            <div className={classes.row}>
              <div className={classes.column50}>
                {this.state.songs?.map((song, id) => (
                  <div className={classes.media}
                    key={song.id} >
                    <div className={classes.mediaImage_modal} onClick={() => {
                      this.handleShowDialog(song.id);
                    }}>
                      <Img imgUrl={song.photo} width={80} imgAlt={song.name} />
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
                          
                          <div className=
                          {
                            classes.audioBlock
                          }>
                            {audioSource(song.audio1, song.audio_name1)}
                            {audioSource(song.audio2, song.audio_name2)}
                            {audioSource(song.audio3, song.audio_name3)}
                            {audioSource(song.rezAudio2, song.rezAudio1)}
                            
                          </div>  
                            <div className=
                            {
                            classes.videoBlock
                            }>
                            {videoSource(song.video1, song.video_name1)}
                            {videoSource(song.video2, song.video_name2)}
                            {videoSource(song.video3, song.video_name3)}                 
                          </div> 
                            {/* <p>{song.audio_name1}</p>
                            <audio controls className={song.audio1 ? '' : classes.mediaHidden}
                              src={song.audio1} type="audio/mpeg" /> */}
                            
                            {/* <p>{song.audio_name2}</p>
                            <audio controls className={song.audio2 ? '' : classes.mediaHidden}
                              src={song.audio2} type="audio/mpeg" /> */}
                            
                            {/* <p>{song.audio_name3}</p>
                            <audio controls className={song.audio3 ? '' : classes.mediaHidden}
                              src={song.audio3} type="audio/mpeg" /> */}
                            
                          

                          {/* <div className={[
                            classes.videoBlock,
                            song.video1 ? '' : classes.mediaHidden].join(' ')
                          }>
                            <p>{song.video_name1}</p> */}
                          {/* { song.video1.includes('youtu.be') ?
                            <ReactPlayer className={song.video1 ? '': classes.mediaHidden} id={classes.videoFrame} url = {song.video1} controls={true} /> :
                            <video src={song.video1} id={classes.videoFrame} controls={true} type="video/mp4" ></video>} */}
                           
                          
                          {/* </div> */}
                          {/* <p>{song.video_name2}</p>
                          <div className={[
                            classes.videoBlock,
                            song.video2 ? '' : classes.mediaHidden].join(' ')
                          }> */}
                          {/* <video src={song.video2} id={classes.videoFrame} controls={true} type="video/mp4" ></video> */}
                          
                          {/* </div> */}
                          {/* <p>{song.video_name3}</p>
                            <div className={[
                              classes.videoBlock,
                              song.video3 ? '' : classes.mediaHidden].join(' ')
                            }> */}
                          {/* <video src={song.video3} id={classes.videoFrame} controls={true} type="video/mp4" ></video> */}
                          

                          {/* </div> */}

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
                  {playList(this.state.songs)}
                  <Link to="/">
                    <button className={classes.btnHome}>Home</button>
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
