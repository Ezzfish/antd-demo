import React from 'react'
import { Table } from 'antd';
import axios from 'axios'
const columns = [
    {
        title: '排名',
        dataIndex: 'name',
    },
    {
        title: '搜索关键字',
        dataIndex: 'searchKeywords',
        
    },
    {
        title: '用户数',
        dataIndex: 'users',
        sorter: (a, b) => a.users - b.users
    },
    {
        title: '周涨幅',
        dataIndex: 'weeklyIncrease',
        sorter: (a, b) => a.weeklyIncrease - b.weeklyIncrease
    },
];
function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}
class BlockThreeTable extends React.Component{
    state={
        data:[]
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/BlockThreeTable`)
            .then(function (response) {
                console.log(response.data)
                t.setState({ data: response.data.data })
                console.log(t.state.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(
            <div >
                <Table 
                    pagination={{ pageSize: 6, size: 'small' }} 
                    size={"small"} columns={columns} 
                    dataSource={this.state.data} 
                    onChange={onChange}
                />
            </div>
            )
    }
}

export default BlockThreeTable;