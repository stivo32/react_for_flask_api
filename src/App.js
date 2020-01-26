import React from 'react';
import './App.css';

class Quote extends React.Component {
  state = {};

  componentDidMount() {
    fetch('http://localhost:5000/quotes/')
        .then(response => response.json())
        .then(data => {
          this.setState({ data });
          console.log(this.state)
        })
  }

  render () {
    return <div>blabla</div>
  }
}


function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;
