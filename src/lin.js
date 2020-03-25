import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
import { Button } from 'antd';

class lin extends Component{
  render(){
    return(
    
      <div className="example-input">
        <center>
      <h1 style={{maginLeft:"100%" , size:"1"}}>Linear Regression</h1>
      
      <br/>N(Create table input): <Input size="large" placeholder="input N" id="nlin" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>Count A (Regression): <Input size="large" placeholder="input A" id="alin" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/><Button type="primary">Confirm</Button>
    </center>
    </div>
    );
  }
}
export default lin;