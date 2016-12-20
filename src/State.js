import React from 'react';

class State extends React.Component{
  
  constructor(){
    super();
    this.state = {
      txt: 'This is the state txt'
    }
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <input type="text"
        onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

export default State;