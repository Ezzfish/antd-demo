import React from "react";
import { Row, Col} from 'antd'
import { Tooltip as AntdTooltip } from 'antd'
import {
    InfoCircleOutlined,
} from '@ant-design/icons'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Coord,
    Tooitip,
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
            <Row gutter={[8, 16]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <div>
                        <span>总销售额</span>
                        {IndexDescription()}                    
                    </div>
                    <div>
                        <span>12,321</span>
                        <span>17.1</span>
                    </div>
                    
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                   
                </Col>
            </Row>
        )
    }
}

export default Block3Chart;