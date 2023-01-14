import React from "react";
import Papa from "papaparse";

class App extends React.Component {
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
    console.log("cliked");
  };
  handleHideDialog = () => {
    this.setState({ ...this.state, show: false });
    console.log("closed");
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
    console.log(result.data);
    const data = result.data
    this.setState({ songs: data });

  }

  render() {
    if (this.state.songs.length === 0) {
      return <h1>load...</h1>
    }
    console.log(this.state.songs)
    return (
      <div className="App">Data
        {this.state.songs.map((song) => (

          <li key={song.id} onClick={() => {
            this.handleShowDialog(song.id);
            alert(song.name)
          }}>
            {song.name} {song.audio_name1}
          </li>
        )
        )}
      </div>
    )
  }
}

export default App;
