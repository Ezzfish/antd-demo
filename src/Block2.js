import React from 'react'
import { Card, DatePicker, Row, Col } from 'antd'
import moment from 'moment';
import Block2Chart from './Block2Chart'
import Block2Item from './Block2Item'
import axios from 'axios'

const { RangePicker } = DatePicker;

function extraContent() {
    return (
        <RangePicker
            allowEmpty={[Boolean, Boolean]}
            ranges={{
                Today: [moment(), moment()],
                '本月': [moment().startOf('month'), moment().endOf('month')]
            }}

        />
    )
}


const tabListNoTitle = [
    {
        key: 'sale',
        tab: '销售量',
    },
    {
        key: 'visit',
        tab: '访问量',
    }
]


function salesContent(ChartName, ItemName,Key) {
    return (
        <div >
            <Row
                className="block2-row"
                style={{
                    marginTop: 4,
                    marginLeft: -24,
                    marginBottom: -16
                }}
            >
                <Col xs={24} sm={12} md={12} lg={12} xl={16}>
                    <Block2Chart name={ChartName} data={Key}/>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={8}>
                    <Block2Item name={ItemName} />
                </Col>
            </Row>
        </div>
    )
}


class Block2 extends React.Component {
    state = {
        noTitleKey: 'sale',
    }
    onTabChange = (key, type) => {
        console.log(key, type)
        this.setState({ [type]: key })
    }
    
    render() {
        const contentListNoTitle = {
            sale: salesContent('销售趋势', '门店销售额排名'),
            visit: salesContent('访问量趋势', '门店访问量排名'),
        }
        return (
            <Card
                style={{ width: '100%', marginBottom: 16 }}
                tabList={tabListNoTitle}
                activeTabKey={this.state.noTitleKey}
                tabBarExtraContent={extraContent()}
                onTabChange={key => {
                    this.onTabChange(key, 'noTitleKey');
                }}
            >
                {contentListNoTitle[this.state.noTitleKey]}
            </Card>
        )
    }
}



export default Block2;