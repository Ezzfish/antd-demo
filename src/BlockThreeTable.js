import React from 'react'
import { Table } from 'antd';

const columns = [
    {
        title: '排名',
        dataIndex: 'rank',
    },
    {
        title: '搜索关键字',
        dataIndex: 'searchKeywords',
        render: text => <a>{text}</a>,
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

const data = [
    {
        key: '1',
        rank: 'John Brown',
        searchKeywords: 98,
        users: 60,
        weeklyIncrease: 70,
    },
    {
        key: '2',
        rank: 'Jim Green',
        searchKeywords: 98,
        users: 66,
        weeklyIncrease: 89,
    },
    {
        key: '3',
        rank: 'Joe Black',
        searchKeywords: 98,
        users: 90,
        weeklyIncrease: 70,
    },
    {
        key: '4',
        rank: 'Jim Red',
        searchKeywords: 88,
        users: 99,
        weeklyIncrease: 89,
    },
    {
        key: '5',
        rank: 'Jim Red',
        searchKeywords: 88,
        users: 99,
        weeklyIncrease: 89,
    },
    {
        key: '6',
        rank: 'Jim Red',
        searchKeywords: 88,
        users: 99,
        weeklyIncrease: 89,
    },
    {
        key: '7',
        rank: 'Jim Red',
        searchKeywords: 88,
        users: 99,
        weeklyIncrease: 89,
    },
    {
        key: '8',
        rank: 'Jim Red',
        searchKeywords: 88,
        users: 99,
        weeklyIncrease: 89,
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}
class BlockThreeTable extends React.Component{
    render(){
        return(
            <div>
                <Table pagination={{ pageSize: 6, size: 'small' }} size={"small"} columns={columns} dataSource={data} onChange={onChange} />
            </div>
            )
    }
}

export default BlockThreeTable;