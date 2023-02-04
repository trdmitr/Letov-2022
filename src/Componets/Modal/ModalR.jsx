import React from "react";
// import SinglOne from "../SinglOne/SinglOne";
import "./modal.css";
  export default class Modal extends React.Component {
  // constructor(props) {
  //   super(props);
  

//   this.state = {
//     songs: this.props.songs,
//     selected:  this.props.children[1]
//   }
// }

    // songs = this.props.songs
    // selId = this.state.selected
  
    render() {
      const singls =    this.props.songs.filter(song => song.id ===  this.props.selId)
      // console.log("SelId", singls)
        return (
            <div className="modal" id="modal">
             <div className="content">{this.props.children}
             <p>{singls.name}</p> 
             </div>
            </div>
          );
    }
  }