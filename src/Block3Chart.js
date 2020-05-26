import React from "react";
import { Row, Col } from 'antd'
import { Tooltip as AntdTooltip } from 'antd'
import {
    InfoCircleOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
} from '@ant-design/icons'
import BlockChart from './Block3ChartChart'
import axios from 'axios'
function numberChange(number) {
    var numberHigh = (number - (number % 1000)) / 1000
    var numberLow = number - (numberHigh * 1000)
    if (number <= 999) {
        return (number)
    }
    if (numberLow <= 99 && numberLow >= 10) {
        return (`${numberHigh},0${numberLow}`)
    }
    if (numberLow <= 9) {
        return (`${numberHigh},00${numberLow}`)
    }
    else {
        return (`${numberHigh},${numberLow}`)
    }
}
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
    state={
        search:0,
        searchRate:0,
        searchPerson:0,
        searchPersonRate:0
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/BlockThreeChart`)
            .then(function (response) {
                console.log(response.data.data)
                t.setState({ 
                    search: response.data.search,
                    searchRate:response.data.searchRate,
                    searchPerson:response.data.searchPerson,
                    searchPersonRate:response.data.searchPersonRate,
                 })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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
                        }}>{numberChange(this.state.search)}</span>
                        <span>
                            {this.state.searchRate}%<CaretUpOutlined style={{ fontSize: '16px', color: '#f5222d', margin: '4px' }} />
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
                        }}>{this.state.searchPerson}</span>
                        <span>
                            {this.state.searchPersonRate}%<CaretDownOutlined style={{ fontSize: '16px', color: '#52c41a', margin: '4px' }} />
                        </span>
                    </div>
                    <BlockChart />
                </Col>
            </Row>
        )
    }
}



export default Block3Chart;