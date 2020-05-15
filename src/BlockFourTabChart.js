import React from "react";
import { Row, Col } from 'antd'
import {
    Chart,
    Geom,
    Coord,
    Label,
    Guide,
    Shape,
    Facet,
    Util,
    Coordinate,
    Interval,
    Axis,
    Tooltip,
    Legend,
    View,
    Annotation,
} from "bizcharts";

function BLockFourTabChart(values,i) {
    var data = [
        { name: '1', value: values[i]},
        { name: '2', value: 100 - values[i] },
    ];
    return (
        <div style={{ width: 140, height: 140 }}>
            <Row padding={[12,0]}>
                <Col span={16}>
                    <div 
                        style={{
                            marginBottom:16,
                            color:'#00000065',
                            fontSize:16
                        }}
                    >
                        Stroes {i}</div>
                    <div
                        style={{
                            
                            color: '#00000045',
                            fontSize: 14
                        }}
                    >
                        转化率</div>
                    <div
                        style={{
                            marginRight: 16,
                            color: '#00000085',
                            fontSize: 24
                        }}
                    >
                        {values[i]}% 
                    </div>
                </Col>
                <Col span={8}>
                    <Chart
                        data={data}
                        width={60}
                        height={100}
                        padding={[36,0,0,0]}
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
export default BLockFourTabChart;
