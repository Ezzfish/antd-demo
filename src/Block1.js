import React, { Component } from 'react';
import { Tooltip, } from 'antd';
import './App.css';
import {
    InfoCircleOutlined,
} from '@ant-design/icons';
import'./Block1.css'

function IndexDescription() {
    return(
        <span class="Contents-main-wrap-block1-action">
            <Tooltip placement="top" title="指标说明">
                <InfoCircleOutlined />
            </Tooltip>
        </span>
    )
}

class Block1 extends React.Component{
    render(){
        return(
            <div class="Contents-main-wrap-block1" >
                <div class="Contents-main-wrap-block1-1">
                    <div class="ant-card">
                        <div class="ant-card-body">
                            <div class="Contents-main-wrap-block1-1-pages">
                                <div class="Contents-main-wrap-block1-1-pages-1">
                                    
                                    <div class="Contents-main-wrap-block1-1-pages-1-metaWrap">
                                        <div class="Contents-main-wrap-block1-1-pages-1-meta">
                                            <span>总销售额</span>
                                            {IndexDescription()}
                                        </div>
                                        <div class="Contents-main-wrap-block1-1-pages-1-total">
                                            <span>¥ 126,560</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="Contents-main-wrap-block1-1-pages-2">
                                    <div class="Contents-main-wrap-block1-1-pages-2-contentFixed">
                                        <div class="Contents-main-wrap-block1-trendItem" title stlye ="margin-right:16px;">
                                            <span>
                                                周同比
                                                <span ></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="Contents-main-wrap-block1-1-pages-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Contents-main-wrap-block1-1">
                    <div class="ant-card">
                        <div class="ant-card-body">
                            <div class="Contents-main-wrap-block1-1-pages">
                                <div class="Contents-main-wrap-block1-1-pages-1"></div>
                                <div class="Contents-main-wrap-block1-1-pages-2"></div>
                                <div class="Contents-main-wrap-block1-1-pages-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Contents-main-wrap-block1-1">
                    <div class="ant-card">
                        <div class="ant-card-body">
                            <div class="Contents-main-wrap-block1-1-pages">
                                <div class="Contents-main-wrap-block1-1-pages-1"></div>
                                <div class="Contents-main-wrap-block1-1-pages-2"></div>
                                <div class="Contents-main-wrap-block1-1-pages-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Contents-main-wrap-block1-1">
                    <div class="ant-card">
                        <div class="ant-card-body">
                            <div class="Contents-main-wrap-block1-1-pages">
                                <div class="Contents-main-wrap-block1-1-pages-1"></div>
                                <div class="Contents-main-wrap-block1-1-pages-2"></div>
                                <div class="Contents-main-wrap-block1-1-pages-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Block1;