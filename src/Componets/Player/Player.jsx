class AudioPlayer extends React.Component {
    render() {
      return (
        <React.Fragment>
        <h1>Audio Player</h1>
        <audio src={audioSong} controls />
        </React.Fragment>
      );
    }
  }