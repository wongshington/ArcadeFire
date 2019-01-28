import React from 'react';

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.state = {val: this.props.val,
                  text: this.props.text,
                  flipped: false};

    this.flip = this.flip.bind(this);
  }

  flip(){
    this.setState({flipped: !this.state.flipped})
  }
  
  render(){
    let text = "";
    if (this.state.flipped){
      text = this.state.text;
    }
    return (
      <div className="tile" onClick={this.flip}>
        <div>{text}</div>
      </div>
    )
  }
}

export default Tile;