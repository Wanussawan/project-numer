
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import bisec from './bisec';
import fals from './fals';
import one from './one';
import newr from './newr';
import secant from './secant';
import cramer from './cramer';
import gausse from './gausse';
import gaussj from './gaussj';
import lu from './lu';
import jaco from './jaco';
import gausssd from './gausssd';
import conju from './conju';
import newd from './newd';
import lag from './lag';
import spi from './spi';
import lin from './lin';
import poly from './poly';
import mul from './mul';
import comt from './comt';
import coms from './coms';
import eul from './eul';
import heun from './heun';
import modie from './modie';
import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render(){
    return(
      <div>
      <Layout>
    <Header className="header">
      <div className="logo" />
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Numerical</Menu.Item>
      </Menu>
      
    </Header>
    <Content style={{ padding: '0 50px' }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' , minHeight : 500 ,color: 'black' }}>
      <Router>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  
                  Root of Equation
                </span>
              }
            >
              <Menu.Item key="1">Bisection<Link to="/bisec"/></Menu.Item>
              <Menu.Item key="2">False Position<Link to="/fals"/></Menu.Item>
              <Menu.Item key="3">One-Point Iteration<Link to="/one"/></Menu.Item>
              <Menu.Item key="4">Newton-Raphson<Link to="/newr"/></Menu.Item>
              <Menu.Item key="5">Secant Method<Link to="/secant"/></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                
                  Linear Algebra
                </span>
              }
            >
              <Menu.Item key="6">Cramer's Rule<Link to="/cramer"/></Menu.Item>
              <Menu.Item key="7">Gauss's Elimination<Link to="/gausse"/></Menu.Item>
              <Menu.Item key="8">Gauss Jordan Method<Link to="/gaussj"/></Menu.Item>
              <Menu.Item key="9">LU Decomposition<Link to="/lu"/></Menu.Item>
              <Menu.Item key="10">Jacobi Iteration Method<Link to="/jaco"/></Menu.Item>
              <Menu.Item key="11">Gauss Seidel Iteration<Link to="/gausssd"/></Menu.Item>
              <Menu.Item key="12">Conjugate Gradient Method<Link to="/conju"/></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  
                  Interpolation
                </span>
              }
            >
              <Menu.Item key="13">Newton Divide Difference<Link to="/newd"/></Menu.Item>
              <Menu.Item key="14">Lagrange<Link to="/lag"/></Menu.Item>
              <Menu.Item key="15">Spline<Link to="/spi"/></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  Least Square Error
                </span>
              }
            >
              <Menu.Item key="16">Linear Regression<Link to="/lin"/></Menu.Item>
              <Menu.Item key="17">Polynomial Regression<Link to="/poly"/></Menu.Item>
              <Menu.Item key="18">Multiple Linear Regression<Link to="/mul"/></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  Integration
                </span>
              }
            >
              <Menu.Item key="19">Composite Trapezoidal Rule<Link to="/comt"/></Menu.Item>
              <Menu.Item key="20">Composite Simpson's Rule<Link to="/coms"/></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={
                <span>
                  Ordinary Differential Equation
                </span>
              }
            >
              <Menu.Item key="21">Euler's Method<Link to="/eul"/></Menu.Item>
              <Menu.Item key="22">Heun's Method<Link to="/heun"/></Menu.Item>
              <Menu.Item key="23">Modifier Euler's Method<Link to="/modie"/></Menu.Item>
            </SubMenu>
          </Menu> </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 , background :'#FFCCFF'}}>
              <Switch>
              <Route path="/bisec" component={bisec} />
              <Route path="/fals" component={fals} />
              <Route path="/one" component={one} />
              <Route path="/newr" component={newr} />
              <Route path="/secant" component={secant} />
              <Route path="/cramer" component={cramer} />
              <Route path="/gausse" component={gausse} />
              <Route path="/gaussj" component={gaussj} />
              <Route path="/lu" component={lu} />
              <Route path="/jaco" component={jaco} />
              <Route path="/gausssd" component={gausssd} />
              <Route path="/conju" component={conju} />
              <Route path="/newd" component={newd} />
              <Route path="/lag" component={lag} />
              <Route path="/spi" component={spi} />
              <Route path="/lin" component={lin} />
              <Route path="/poly" component={poly} />
              <Route path="/mul" component={mul} />
              <Route path="/comt" component={comt} />
              <Route path="/coms" component={coms} />
              <Route path="/eul" component={eul} />
              <Route path="/heun" component={heun} />
              <Route path="/modie" component={modie} />
            
              </Switch>
         </Content>
       
        </Router>
        
        
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>,
  </div>
    );
  }
}
  
export default App;
