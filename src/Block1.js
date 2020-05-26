import React from 'react'
import { Tooltip, Row, Col, Card } from 'antd'
import './App.css'
import {
    InfoCircleOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
} from '@ant-design/icons'
import './Block1.css'
import Chart2 from './Block1Chart2'
import Chart3 from './Block1Chart3'
import Chart4 from './Block1Chart4'
import axios from 'axios'

function IndexDescription() {
    return (
        <span className="block1-action">
            <Tooltip placement="top" title="指标说明">
                <InfoCircleOutlined />
            </Tooltip>
        </span>
    )
}
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
class Block1 extends React.Component {
    state = {
        data: [],
        week: 0,
        day: 0,
        daySale: 0,
        allSale: 0,
        visit: 0,
        dayVisit: 0,
        pay: 0,
        conversion: 0,
        population: 0,
    }
    Proportion() {
        return (
            <div>
                <div className="block1-trendItem">
                    <span>
                        周同比
                    <span className="block-trendText">{this.state.week}%</span>
                        <span ><CaretUpOutlined style={{ fontSize: '16px', color: '#f5222d', margin: '4px' }} /></span>
                    </span>
                </div>
                <div className="block1-trendItem">
                    <span>
                        日同比
                        <span className="block-trendText">{this.state.day}%</span>
                        <span ><CaretDownOutlined style={{ fontSize: '16px', color: '#52c41a', margin: '4px' }} /></span>
                    </span>
                </div>
            </div>
        )
    }
    CardTitle1() {
        return (
            <div className="block1-1-pages">
                <div className="block1-1-pages-1">
                    <div className="=block1-1-pages-1-metaWrap">
                        <div className="block1-1-pages-1-meta">
                            <span>总销售额</span>
                            {IndexDescription()}
                        </div>
                        <div className="block1-1-pages-1-total">
                            <span>¥{numberChange(this.state.allSale)}</span>
                        </div>
                    </div>
                </div>
                <div className="block1-1-pages-2">
                    <div className="block1-1-pages-2-contentFixed">
                        {this.Proportion()}
                    </div>
                </div>
            </div>
        )
    }
    CardTitle2() {
        return (
            <div className="block1-1-pages">
                <div className="block1-1-pages-1">
                    <div className="=block1-1-pages-1-metaWrap">
                        <div className="block1-1-pages-1-meta">
                            <span>访问量</span>
                            {IndexDescription()}
                        </div>
                        <div className="block1-1-pages-1-total">
                            <span>{numberChange(this.state.visit)}</span>
                        </div>
                    </div>
                </div>
                <div className="block1-1-pages-2">
                    <Chart2 />
                </div>
            </div>
        )
    }
    CardTitle3() {
        return (
            <div className="block1-1-pages">
                <div className="block1-1-pages-1">
                    <div className="=block1-1-pages-1-metaWrap">
                        <div className="block1-1-pages-1-meta">
                            <span>支付笔数</span>
                            {IndexDescription()}
                        </div>
                        <div className="block1-1-pages-1-total">
                            <span>{numberChange(this.state.pay)}</span>
                        </div>
                    </div>
                </div>
                <div className="block1-1-pages-2">
                    <Chart3 />
                </div>
            </div>
        )
    }
    CardTitle4() {
        return (
            <div className="block1-1-pages">
                <div className="block1-1-pages-1">
                    <div className="=block1-1-pages-1-metaWrap">
                        <div className="block1-1-pages-1-meta">
                            <span>运营活动效果</span>
                            {IndexDescription()}
                        </div>
                        <div className="block1-1-pages-1-total">
                            <span>{this.state.population}%</span>
                        </div>
                    </div>
                </div>
                <div className="block1-1-pages-2">
                    <Chart4 />
                </div>
            </div>
        )
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/Block1`)
            .then(function (response) {
                t.setState({
                    week: response.data.week,
                    day: response.data.day,
                    daySale: response.data.daySale,
                    allSale: response.data.allSale,
                    visit: response.data.visit,
                    dayVisit: response.data.dayVisit,
                    pay: response.data.pay,
                    conversion: response.data.conversion,
                    population: response.data.population,
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="site-card-wrapper">
                <Row className="block1-row" gutter={[8, 16]}>
                    <Col className="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card className="block1-card" title={this.CardTitle1()} bordered={false}>
                            日销售额￥{numberChange(this.state.daySale)}
                        </Card>
                    </Col>
                    <Col className="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card className="block1-card" title={this.CardTitle2()} bordered={false}>
                            日访问量 {numberChange(this.state.dayVisit)}
                        </Card>
                    </Col>
                    <Col className="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card className="block1-card" title={this.CardTitle3()} bordered={false}>
                            转化率 {this.state.conversion}%
                        </Card>
                    </Col>
                    <Col className="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card className="block1-card" title={this.CardTitle4()} bordered={false}>
                            {this.Proportion()}
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Block1;
