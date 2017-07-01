import React, { Component } from 'react';
import './App.css';
import Loader from './Components/Loader/Loader';
import Portfolio from './Container/Portfolio';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
    }
  }

componentDidMount(){
  setTimeout(() => {
    this.setState({
      isLoading: false
    })
  }, 1000);
}


  render() {
    return (
      
        this.state.isLoading ? <Loader /> :
        <Portfolio />
    );
  }
}

export default App;
