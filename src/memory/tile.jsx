import React from 'react';

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.state = {val: this.props.val,
                  text: this.props.text,
                  flipped: false}
  }

  render(){
    return (
      <div className="tile">
        <div>this.state.text</div>
      </div>
    )
  }
}

export default Tile;