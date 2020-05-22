import React from 'react'
import { Row, Col, Card, Menu, Dropdown, Radio } from 'antd'
import { DashOutlined } from '@ant-design/icons';
import Block3Chart from './Block3Chart.js'
import BlockThreeTable from './BlockThreeTable.js'
import BlockThreeChartTwo from './BlockThreeChartTwo.js'

const menu = (
    <Menu>
        <Menu.Item>
            操作一
        </Menu.Item>
        <Menu.Item>
            操作二
        </Menu.Item>
    </Menu>
)

function ExtraMenu() {
    return (
        <Dropdown overlay={menu} placement="bottomCenter">
            <DashOutlined />
        </Dropdown>
    )
}


function RadioContent(label) {
    return (
        <div>
            {(label === 'a') && <BlockThreeChartTwo />}
            {(label === 'b') && <BlockThreeChartTwo />}
            {(label === 'c') && <BlockThreeChartTwo />}
        </div>
    )
}



class RadioCard extends React.Component {
    state = {
        label: 'a'
    }

    handleRadioChange = e => {
        this.setState({ label: e.target.value })
    }

    ExtraRadio() {
        return (
            <span>
                <Radio.Group style={{ marginRight: 16 }} onChange={this.handleRadioChange} defaultValue="a">
                    <Radio.Button value='a'>全部渠道</Radio.Button>
                    <Radio.Button value='b'>线上</Radio.Button>
                    <Radio.Button value='c'>门店</Radio.Button>
                </Radio.Group>
                {ExtraMenu()}
            </span>
        )
    }


    render() {
        const { label } = this.state
        return (
            <Card
                style={{ height: 543.5 }}
                className="block1-card"
                title={'销售额类别占比'}
                extra={this.ExtraRadio()}
                bordered={false}
            >
                {RadioContent(label)}
            </Card>
        )
    }
}






class Block3 extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={[8, 16]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <Card
                            style={{ height: '100%' }}
                            className="block1-card"
                            title={'线上热门搜索'}
                            extra={ExtraMenu()}
                            bordered={false}
                        >
                            <Block3Chart />
                            <BlockThreeTable />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <RadioCard />
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Block3;