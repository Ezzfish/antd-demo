import React from 'react'
import { Card,Tabs } from 'antd'
import BlockFourTabChart from './BlockFourTabChart'
import BlockFourContentChart from './BlockFourContentChart.js'
const { TabPane } = Tabs
function addd(i) {
    return (
        <div>
            {i}
        </div>
    )

}
class BlockFour extends React.Component {
    render() {
        const value = [70, 60, 20, 30, 40, 40, 50, 30, 20, 20]
        return (
            <div>
                <Card bordered={false}>
                    <Tabs
                        defaultActiveKey="1"
                        tabPostion='botton'
                        style={{ height: '100%' }}
                    >
                        {[...Array(10).keys()].map(i => (
                            <TabPane tab={BlockFourTabChart(value, i)} key={i}>
                                <BlockFourContentChart />
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default BlockFour;