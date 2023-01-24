import React from 'react'

class SinglOne extends React.Component {
    render() {
        // this.props.selId

     const singls =    this.props.songs.filter(songs => songs.id === this.props.selId)
console.log("Sinfle One", singls
      );
      return (
        singls.map((singl) => {
            <div>
                 <p>{singl.name}!</p>
            </div>
            
            console.log("MAP", singl.name
      )
        }
        )
      )
    }
  }

export default SinglOne