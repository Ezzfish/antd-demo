import React from "react";
import { Row, Col} from 'antd'
import { Tooltip as AntdTooltip } from 'antd'
import {
    InfoCircleOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
} from '@ant-design/icons'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Coord,
    Tooltip,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";

function IndexDescription() {
    return (
        <span style={{margin:4}}>
            <AntdTooltip placement="top" title="指标说明">
                <InfoCircleOutlined />
            </AntdTooltip>
        </span>
    )
}

function block(){

}

class Block3Chart extends React.Component {
    render() {
        return (
            <Row gutter={[32, 16]}>
                <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
                    <div>
                        <span>搜索用户数</span>
                        {IndexDescription()}                    
                    </div>
                    <div>
                        <span style={{
                            fontSize:24,
                            color:'#000',
                            marginRight:32,
                            }}>12,321</span>
                        <span>
                            17.1<CaretUpOutlined style={{ fontSize: '16px', color: '#f5222d', margin: '4px' }} />
                        </span>
                    </div>
                    <BlockChart/>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <div>
                        <span>人均搜索次数</span>
                        {IndexDescription()}
                    </div>
                    <div>
                        <span style={{
                            fontSize: 24,
                            color: '#000',
                            marginRight: 32,
                        }}>2.7</span>
                        <span>
                            26.2<CaretDownOutlined style={{ fontSize: '16px', color: '#52c41a', margin: '4px' }} />
                        </span>
                    </div>
                    <BlockChart />
                </Col>
            </Row>
        )
    }
}

class BlockChart extends React.Component {
    render() {
        const data = [
            {
                month: "Jan",
                city: "Tokyo",
                temperature: 7
            },
            {
                month: "Feb",
                city: "Tokyo",
                temperature: 6.9
            },
            {
                month: "Mar",
                city: "Tokyo",
                temperature: 9.5
            },
            {
                month: "Apr",
                city: "Tokyo",
                temperature: 14.5
            },
            {
                month: "May",
                city: "Tokyo",
                temperature: 18.4
            },
            {
                month: "Jun",
                city: "Tokyo",
                temperature: 21.5
            },
            {
                month: "Jul",
                city: "Tokyo",
                temperature: 25.2
            },
            {
                month: "Aug",
                city: "Tokyo",
                temperature: 26.5
            },
            {
                month: "Sep",
                city: "Tokyo",
                temperature: 23.3
            },
            {
                month: "Oct",
                city: "Tokyo",
                temperature: 18.3
            },
            {
                month: "Nov",
                city: "Tokyo",
                temperature: 13.9
            },
            {
                month: "Dec",
                city: "Tokyo",
                temperature: 9.6
            },
        ];
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        return (
            <div style={{width:'100%'}}>
                <Chart
                    height={50}
                    width={350}
                    padding={"auto"}
                    data={data}
                    scale={cols}
                    forceFit
                >
                    <Legend />
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
                    <Axis name="month" visible={false}/>
                    <Axis name="temperature" visible={false}/>
                    <Geom
                        type="area"
                        position="month*temperature"
                        size={2}
                        shape="smooth"/>
                    <Geom
                        type="line"
                        position="month*temperature"
                        size={2}
                    />
                </Chart>
            </div>
        );
    }
}

export default Block3Chart;