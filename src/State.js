import React from 'react';

class State extends React.Component{
  
  constructor(){
    super();
    this.state = {
      txt: 'This is the state txt'
    }
  }

  render(){
    return (
      <h1>{this.state.txt}</h1>
    )
  }
}

export default State;