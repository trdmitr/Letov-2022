import classes from "../CaverPage/CaverPage.module.css"
import ReactPlayer from "react-player";
import   AudioList from "../Player/PlayList.jsx" ;
export const audioSource = (linkAuidio, linkName) => {
    return (
      <div>
        <p>{linkName}</p>
        <audio controls className={linkAuidio ? '' : classes.mediaHidden}
          src={linkAuidio} type="audio/mpeg" />
      </div>
    )
  }

  export const videoSource = (linkVideo, linkName) => {
    return (
        <div>
    <p>{linkName}</p>
    {linkVideo.includes('youtu.be') ? <ReactPlayer className={linkVideo ? '' : classes.mediaHidden} id={classes.videoFrame} url={linkVideo} controls={true} /> 
    :  <video className={[classes.videoBlock, linkVideo ? '' : classes.mediaHidden].join(' ')} src={linkVideo} controls={true} type="video/mp4" ></video>}
    </div>
    )
  }
    
//   export const audiosongs = (x, audio, audio_name, song_name)
//   songs.map((song) => {
//     const container = {};
//      container.name = song_name;
//      container.src= audio;
//      container.aud_name = audio_name;
//     return container;
// }
// )
export const playList = (propSong) => {
  return (
     propSong.length <= 1 ? null : (
  <AudioList songs={propSong}></AudioList>)
  )
 
} 
