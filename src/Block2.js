import React from 'react'
import { Card, DatePicker,Row, Col } from 'antd'
import moment from 'moment';
import Block2Chart1 from './Block2Chart1'
import Block2Item from './Block2Item'


const {RangePicker}= DatePicker;

function extraContent(){
    return(
        <RangePicker
            allowEmpty={[Boolean,Boolean]}
            ranges={{
                Today:[moment(),moment()],
                '本月':[moment().startOf('month'),moment().endOf('month')]
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

function salesContent() {
    return (
        <div >
            <Row 
                class="block2-row" 
                style={{ 
                    marginTop: 4,
                    marginLeft: -24, 
                    marginBottom: -16 
                }}
            >
                <Col xs={24} sm={12} md={12} lg={12} xl={15}>
                    <Block2Chart1 />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={9}>
                    <Block2Item/>
                </Col>
            </Row>
        </div>
    )
}

const contentListNoTitle={
    sale: salesContent(),
    visit:<p>content2</p>,
}

class Block2 extends React.Component{
    state={
        noTitleKey:'sale'
    }

    
    onTabChange = (key, type) => {
        console.log(key, type)
        this.setState({ [type]: key })
    }

    render(){
        return(
            <Card
                style={{ width: '100%' }}
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