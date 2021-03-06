import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Input, Button, Card, Table } from 'antd';
import { compile, range } from 'mathjs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

var dataInTable = []

const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];

const { Content } = Layout;
const InputStyle = {width:200 , background:"#FFFFFF",};
const xValues = range(-10, 10, 0.5).toArray();
var fx ;

class one extends Component {

    constructor() {
        super();
        this.state = {
            fx: 0,
            x:0,
            showOutputCard: false,
            showGraph: false,
            moveLeft: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.one = this.one.bind(this);
    }
    one(x) {
        fx = this.state.fx;
        var xm = 0;
        var xn = 0;
        var n = 0;
        var sum = parseFloat(0.000000);
        var data = []
        data['x'] = []
        data['error'] = []
        do {
            xm = this.func(xm);
            if (n==0) {
                sum = 1;
                }
                else {
                  sum = this.error(xm,xn);
                    xn = xm;
                }
            data['x'][n] = xm.toFixed(6);
            data['error'][n] = Math.abs(sum).toFixed(6);
            n++;
        } while (Math.abs(sum) > 0.000001);
        
        this.createTable(data['x'], data['error']);
        this.setState({
            showOutputCard: true,
            showGraph: true
        })


    }
    func(X) {
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }
    createTable(x, error) {
        dataInTable = []
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                x: x[i],
                error: error[i]
            });
        }
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    render() {
        return (
            <div >
                <Content
                    onChange={this.handleChange}
                    style={{
                        padding: '50px',
                        width: '100%',
                    }}
                >
                    <Content>
                        <center>
                        <h1>One Point Iteration</h1>
                        <br/>F(x):&nbsp;<Input size="large" name="fx" style={InputStyle}></Input>
                        <br/><br/>X:&nbsp; <Input size="large" name="x" style={InputStyle}></Input><br /><br />
                        <Button type="primary" id="confirm" onClick={
                            () => this.one(parseFloat(this.state.x))
                        }
                          >Confirm <br></br></Button></center>
                    </Content>

                    <br /><br />
                    {this.state.showOutputCard &&

                        <Card
                            style={{ borderRadius: "10px" }}
                        >
                            <Table columns={columns} dataSource={dataInTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black" }}></Table>
                        </Card>
                    }

                    <br /><br />
                    {this.state.showGraph &&
                        <Card
                            style={{ borderRadius: "20px" }}
                        >
                            <LineChart width={730} height={250} data={dataInTable}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="error" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36} />
                                <Line name="error" type="monotone" dataKey="error" stroke="#8884d8" />
                            </LineChart>
                        </Card>
                    }
                    <br /><br />
                </Content>
            </div>
        )
    }
}
export default one;