import React from "react";
import {Button} from 'antd'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
} from "bizcharts";
import { withResizeDetector } from "react-resize-detector";
import axios from 'axios'
class Block2Chart extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {}
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        axios.get('http://localhost:8000')
            .then(function (response) {
                let data =response.data
                alert(data)
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
    render() {
        const data = axios.get('http://localhost:8000')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        /*[
            {
                month: "1月",
                sales: 38
            },
            {
                month: "2月",
                sales: 52
            },
            {
                month: "3月",
                sales: 61
            },
            {
                month: "4月",
                sales: 145
            },
            {
                month: "5月",
                sales: 48
            },
            {
                month: "6月",
                sales: 38
            },
            {
                month: "7月",
                sales: 14
            },
            {
                month: "8月",
                sales: 35
            },
            {
                month: "9月",
                sales: 12
            },
            {
                month: "10月",
                sales: 23
            },
            {
                month: "11月",
                sales: 65
            },
            {
                month: "12月",
                sales: 23
            }
        ];*/
        const cols = {
            sales: {
                tickInterval: 20
            }
        };
        return (
            <div style={{ paddingLeft: 32, paddingBottom: 32 }}>
                <h4 style={{ marginBottom: 20 }}>{this.props.name}</h4>
                <Button onClick={this.handleClick}>测试</Button>
                <Chart
                    height={284}
                    width={this.props.width - 32}
                    data={data} scale={cols}>
                    <Axis name="month" />
                    <Axis name="sales" />
                    <Tooltip
                        crosshairs={{
                            title: "data.temperature",
                            fillOpacity: 0.1,
                        }}
                        position={'left', 'right'}
                        inPlot={true}
                        offset={30}
                        Opacity={0.5}
                    />
                    <Geom type="interval" position="month*sales" />
                </Chart>
            </div>
        );
    }
}

export default withResizeDetector(Block2Chart);