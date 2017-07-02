import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {

    constructor(props){
        super()



    }



  render() {
    return (
      <div className="container">
          <div className="row banner">
              <div className="col-xs-12">
                  <span style={{color:'#c72121'}}>carou</span>it <span className="glyphicon glyphicon-comment" style={{color:'#c72121'}}/>
              </div>
          </div>
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
