import React from 'react'
import {Row, Col, Card, Menu,Dropdown } from 'antd'
import { DashOutlined } from '@ant-design/icons';
import Block3Chart from './Block3Chart.js'
const menu=(
    <Menu>
        <Menu.Item>
            操作一
        </Menu.Item>
        <Menu.Item>
            操作二
        </Menu.Item>
    </Menu>
)

function ExtraMenu(){
    return(
        <Dropdown overlay={menu} placement="bottomCenter">
            <DashOutlined/>
        </Dropdown>
    )
}

class Block3 extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={[8, 16]}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Card class="block1-card" title={'线上热门搜索'} extra={ExtraMenu()} bordered={false}>
                            <Block3Chart/>
                            </Card>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Card class="block1-card" title={1} bordered={false}>
                            日销售额￥12,423
                            </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Block3;