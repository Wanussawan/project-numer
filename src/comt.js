import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
import { Button } from 'antd';

class comt extends Component{
  render(){
    return(
    
      <div className="example-input">
        <center>
      <h1 style={{maginLeft:"100%" , size:"1"}}>Composite Trapezoidal Rule</h1>
      
      <br/>F(x): <Input size="large" placeholder="input F(x)" id="fxcomt" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>X(start):&nbsp; <Input size="large" placeholder="input Xstart" id="xscomt" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>X(end):&nbsp; <Input size="large" placeholder="input Xend" id="xecomt" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>N(split):&nbsp; <Input size="large" placeholder="input N" id="ncomt" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/><Button type="primary">Confirm</Button>
    </center>
    </div>
    );
  }
}
export default comt;