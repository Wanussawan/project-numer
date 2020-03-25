import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
import { Button } from 'antd';

class mul extends Component{
  render(){
    return(
    
      <div className="example-input">
        <center>
      <h1 style={{maginLeft:"100%" , size:"1"}}>Multiple Linear Regression</h1>
      
      <br/>N(Create table input): <Input size="large" placeholder="input N" id="nmul" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>X (count x):&nbsp; <Input size="large" placeholder="input X" id="xmul" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/><Button type="primary">Confirm</Button>
    </center>
    </div>
    );
  }
}
export default mul;