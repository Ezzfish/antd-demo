import { List, Card, Row, Avatar, Typography } from 'antd'
import React from "react";


function ListItem(label) {
    return (
        <div>
            {label <= 3 ?
                <Avatar size="small">{label}</Avatar> :
                <div style={{
                    width: 24,
                    height: 24,
                    textAlign: 'center'
                }}>{label}</div>
            }
        </div>

    )
}

const listData = [];
for (let i = 1; i < 7; i++) {
    listData.push({
        num: `${i}`,
        title: `工专路${i - 1}号店`
    })
}

class Block2Item extends React.Component {

    render() {
        return (
            <div>
                <h4 style={{ paddingLeft: 24 }}>{this.props.name}</h4>
                <List
                    itemLayout="vertical"
                    size="large"
                    split={false}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingTop: 0
                        }}>
                            <span style={{ margin: '8px' }}>{ListItem(item.num)}</span>
                            <span style={{}}>{item.title}</span>
                            <span style={{ marginLeft: 'auto' }}>323,234</span>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Block2Item;