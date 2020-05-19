import React from "react";
import { Row, Col } from 'antd'
import { Tooltip as AntdTooltip } from 'antd'
import {
    InfoCircleOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
} from '@ant-design/icons'
import BlockChart from './Block3ChartChart'

function IndexDescription() {
    return (
        <span style={{ margin: 4 }}>
            <AntdTooltip placement="top" title="指标说明">
                <InfoCircleOutlined />
            </AntdTooltip>
        </span>
    )
}


class Block3Chart extends React.Component {
    render() {
        return (
            <Row gutter={[32, 16]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <div>
                        <span>搜索用户数</span>
                        {IndexDescription()}
                    </div>
                    <div>
                        <span style={{
                            fontSize: 24,
                            color: '#000',
                            marginRight: 32,
                        }}>12,321</span>
                        <span>
                            17.1<CaretUpOutlined style={{ fontSize: '16px', color: '#f5222d', margin: '4px' }} />
                        </span>
                    </div>
                    <BlockChart />
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



export default Block3Chart;