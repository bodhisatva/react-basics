import React from 'react';

//stateless component
//const App = () => <h1>Hello stateless component</h1>

class App extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <h1>{txt}</h1>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "This is default value if not defined"
}

export default App;
