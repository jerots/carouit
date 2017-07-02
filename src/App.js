import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Banner from './ReusableComponents/Banner.js'

class App extends Component {

    constructor(props){
        super()



    }



  render() {
    return (
      <div className="container">
          <Banner/>
          <div className="row">
              <div className="col-xs-12">
                  CONTENT HERE
              </div>
          </div>
      </div>
    );
  }
}

export default App;
