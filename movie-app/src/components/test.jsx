import React from 'react'

class App extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name || 'Anonymous'
      }
    }      render() {
      return (
        <p>Hello {this.state.name}</p>
      ); 
    }
  }
  
  