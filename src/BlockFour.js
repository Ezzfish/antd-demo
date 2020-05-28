import React from 'react'
import { Card,Tabs } from 'antd'
import BlockFourTabChart from './BlockFourTabChart'
import BlockFourContentChart from './BlockFourContentChart.js'

const { TabPane } = Tabs

class BlockFour extends React.Component {
    render() {
        return (
            <div>
                <Card bordered={false}>
                    <Tabs
                        defaultActiveKey="1"
                        tabPostion='botton'
                        style={{ height: '100%' }}
                    >
                        {[...Array(10).keys()].map(i => (
                            <TabPane tab={<BlockFourTabChart i={i}/>} key={i}>
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