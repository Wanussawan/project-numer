import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
import { Button } from 'antd';

class heun extends Component{
  render(){
    return(
    
      <div className="example-input">
        <center>
      <h1 style={{maginLeft:"100%" , size:"1"}}>Heun's Method</h1>
      
      <br/>F(x): <Input size="large" placeholder="input F(x)" id="fxh" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>X(start):&nbsp; <Input size="large" placeholder="input Xstart" id="xsh" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>X(end):&nbsp; <Input size="large" placeholder="input Xend" id="xeh" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>Y(0):&nbsp; <Input size="large" placeholder="input Y" id="Yh" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>H:&nbsp; <Input size="large" placeholder="input H" id="Hh" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/>Real F(x):&nbsp; <Input size="large" placeholder="input Real" id="realh" style={{width:200 , background:"#FFFFFF"}} />
      <br/><br/><Button type="primary">Confirm</Button>
    </center>
    </div>
    );
  }
}
export default heun;