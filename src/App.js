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
  console.log(this.portfolio);
  // this.portfolio.addEventListener("load", this.loadPortfolio);
}
  // setTimeout(() => {
  //   this.setState({
  //     isLoading: false
  //   })
  // }, 1000);


  loadPortfolio = () => {
    console.log('lksdfkljs')
    this.setState({
      isLoading: false,
    })
  }


  render() {
    return (

      <div>
        {this.state.isLoading && <Loader />} 
        <div onLoad={this.loadPortfolio}>
             <Portfolio />
        </div>
     
      </div>
    );
  }
}

export default App;
