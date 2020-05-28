import { List, Avatar } from 'antd'
import React from "react";
import axios from 'axios'
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
    state = {
        data: [{ population: 0 }]
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/BlockTwoItem`)
            .then(function (response) {
                t.setState({ data: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
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
                            <span >{item.title}</span>
                            <span style={{ marginLeft: 'auto' }}>{this.state.data[0].population}</span>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Block2Item;