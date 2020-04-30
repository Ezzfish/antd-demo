import React, { Component } from 'react';
import { Tooltip,Row,Col,Card } from 'antd';
import './App.css';
import {
    InfoCircleOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
} from '@ant-design/icons';
import'./Block1.css'

function IndexDescription() {
    return(
        <span class="block1-action">
            <Tooltip placement="top" title="指标说明">
                <InfoCircleOutlined />
            </Tooltip>
        </span>
    )
}

function CardTitle1(){
    return(
        <div class="block1-1-pages">
            <div class="block1-1-pages-1">
                <div class="=block1-1-pages-1-metaWrap">
                    <div class="block1-1-pages-1-meta">
                        <span>总销售额</span>
                        {IndexDescription()}
                    </div>
                    <div class="block1-1-pages-1-total">
                        <span>¥ 126,560</span>
                    </div>
                </div>
            </div>
            <div class="block1-1-pages-2">
                <div class="block1-1-pages-2-contentFixed">
                    <div class="block1-trendItem">
                        <span>
                            周同比
                            <span class="block-trendText">12%</span>
                            <span ><CaretUpOutlined style={{ fontSize: '16px', color: '#f5222d', margin : '4px' }} /></span>
                        </span>
                    </div>
                    <div class="block1-trendItem">
                        <span>
                            日同比
                            <span class="block-trendText">11%</span>
                            <span ><CaretDownOutlined style={{ fontSize: '16px', color: '#52c41a', margin: '4px'}} /></span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="block1-1-pages-3"></div>
        </div>
         )
}




class Block1 extends React.Component{
    render(){
        return(
            <div className="site-card-wrapper">
                <Row class="block1-row" gutter={[8,16]}>
                    <Col class="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card class="block1-card" title={CardTitle1()} bordered={false}>
                            日销售额￥12,423
                            </Card>
                    </Col>
                    <Col class="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card class="block1-card" title="Card title" bordered={false}>
                            Card content
                            </Card>
                    </Col>
                    <Col class="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card class="block1-card" title="Card title" bordered={false}>
                            Card content
                            </Card>
                    </Col>
                    <Col class="block1-col" xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card class="block1-card" title="Card title" bordered={false}>
                            Card content
                            </Card>
                    </Col>
                </Row>
            </div>
        )
    }

}


export default Block1;

/* */