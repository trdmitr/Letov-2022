import React from "react";
import Papa from "papaparse";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = { data: [] };

  }
  componentDidMount() {
    Papa.parse( "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5F_b9Zjd0QP9o2T6rT91qvpf8DzNOtvPYIIQfPbUqQlg6jU_mMT2VVCXPv14vVnQQigGeS-_Tz5lr/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,
        step: this.updateData,
        complete: function() {
          console.log("this.updateData");
        }
      }
    );
  }
  // updateData(result) {
  //   const data = result.data;
  //   // Here this is available and we can call this.setState (since it's binded in the constructor)
  //   this.setState({data: data}); // or shorter ES syntax: this.setState({ data });
  //   console.log(data);
  // }

  updateData(result) {
    console.log(result); // displays whole data
    this.setState({data: result}); // but gets error here
}
 
  render(props) {
    // console.log(data);
    // Your render function
    return (
    <div className="App">Data
   { this.data.map((dat) => (
      <ul>
        <li>
       {dat.name}
        </li>
      </ul>
    )
    )}
    </div>
    
    
    
    )

  }
}

export default App;
