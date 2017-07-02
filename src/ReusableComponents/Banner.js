import React, { Component } from 'react';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class Banner extends Component {
  render() {
    return (
          <div className="row banner">
              <div className="col-xs-12">
                  <span style={{color:'#c72121'}}>carou</span>it <span className="glyphicon glyphicon-comment" style={{color:'#c72121'}}/>
              </div>
          </div>
    );
  }
}

export default Banner;
