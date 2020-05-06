import {Descriptions} from 'antd'
import React from "react";
import DescriptionsItem from 'antd/lib/descriptions/Item';

function DesItem(label){
    return(
    <DescriptionsItem span={3} label={label }>
        工专路{label+1}号店
        <span style={{float:'right'}}>
            323,234
        </span>
    </DescriptionsItem>
    )
}

class Block2Item extends React.Component{
    render(){
        return(
            <Descriptions title="门店销售额排行">
                {DesItem(0)}
                {DesItem(1)}
                {DesItem(2)}
                {DesItem(3)}
                {DesItem(4)}
                {DesItem(5)}
                {DesItem(6)}
            </Descriptions>
        )
    }
}

export default Block2Item