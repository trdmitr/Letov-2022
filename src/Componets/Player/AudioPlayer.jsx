import React from "react";
export default class AudioPlayer extends React.Component {
    constructor(props){
    super(props)

    this.state = {
        currentTrack: 0,
    }

    }
    changeData(trackIndex){
        this.setState({currentTrack: trackIndex})
      }
      mapSongsFields(fields) {
        let isActiveUsers = [];
        for (let fromUser of this.props.songs) {
            let song = {};
            for (let field of fields)
                song[field] = fromUser[field];
            isActiveUsers.push(song);
        }
        return isActiveUsers;
        
    }
    componentDidMount() {
    
        // console.log("Sinfle One", singls);
  
    }
   
    render() {  
      if (this.props.songs === null) {
        // Render loading state ...
      } else {
        const aud4 = this.mapSongsFields(["name", "audio1"]);
    const aud5 = this.mapSongsFields(["name", "audio2"]);
    const aud6 = this.mapSongsFields(["name", "audio3"]);
    const musicTracks2 = [...aud4, ...aud5, ...aud6].filter(e => e.audio1 !== "" && e.audio2 !== '' && e.audio3 !== '' );
      console.log ("musicTracks22" , musicTracks2)
      }
    
  
      return (
        <React.Fragment>
        <h1>Audio Player</h1>
        {/* <audio src={audioSong} controls /> */}
        {/* {console.log ("musicTracks2" , this.musicTracks2)} */}
        </React.Fragment>
      );
    }
  }