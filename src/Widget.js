import React from 'react';

class Widget extends React.Component{
  
  constructor(){
    super();
    this.state = {
      txt: 'This is parent component'
    }
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Input update={this.update.bind(this)} /><br/>
        <Input update={this.update.bind(this)} /><br/>
        <Input update={this.update.bind(this)} /><br/>      
      </div>
    )
  }
}

const Input = (props) =>
 <input type="text" onChange={props.update}/>

export default Widget;