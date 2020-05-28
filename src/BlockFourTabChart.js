import React from "react";
import { Row, Col } from 'antd'
import {
    Chart,
    Geom,
    Coordinate,
} from "bizcharts";
import axios from 'axios'
class BLockFourTabChart extends React.Component{
    state={
        data:[]   
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/BlockFour`)
            .then(function (response) {
                t.setState({
                    data :[
                        { name: '1', value: response.data[0] },
                        { name: '2', value: 100 -response.data[0]},
                    ]})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(
            <div style={{ width: 140, height: 140, paddingRight: 8 }}>
                <Row padding={[12, 0]}>
                    <Col span={12}>
                        <div
                            style={{
                                marginBottom: 16,
                                color: '#00000065',
                                fontSize: 16
                            }}
                        >
                            Stroes {this.props.i+1}</div>
                        <div
                            style={{

                                color: '#00000045',
                                fontSize: 14
                            }}
                        >
                            转化率</div>
                        <div
                            style={{
                                marginRight: 8,
                                color: '#00000085',
                                fontSize: 24
                            }}
                        >
                            {/*this.state.data[0].value*/}%
                    </div>
                    </Col>
                    <Col span={8}>
                        <Chart
                            data={this.state.data}
                            width={60}
                            height={100}
                            padding={[18, 0, 0, 0]}
                            pure
                        >
                            <Coordinate type="theta" radius={0.65} innerRadius={0.55} />
                            <Geom
                                type="interval"
                                position="value"
                                color={['name', ['#1890ff', '#F1F2F5']]}
                                adjust={["stack"]}
                            />
                        </Chart>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BLockFourTabChart;
