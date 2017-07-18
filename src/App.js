import React, { Component } from 'react';
import './App.css';
import Loader from './Components/Loader/Loader';
import Portfolio from './Container/Portfolio';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
    }
  }

componentDidMount(){
  setTimeout(() => {
    this.setState({
      isLoading: true
    })
  }, 3000);


}


  // loadPortfolio = () => {
  //   setTimeout(() => {
  //       this.setState({
  //     isLoading: false,
  //   })
  //   }, 2500);
  // }


  render() {
    return (

      <div>

         {this.state.isLoading ? <Portfolio /> : <Loader />} 
         {/* {this.state.isLoading && <Loader />} 
        <div onLoad={this.loadPortfolio}>
             <Portfolio />
        </div>  */}
     
      </div>
    );
  }
}

export default App;
