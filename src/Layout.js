import React from 'react';
import ReactDOM from 'react-dom';
import { Layout,Menu,Tooltip,Badge } from 'antd';
import 'antd/dist/antd.css';
import Contents from './Contents'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    SearchOutlined,
    QuestionCircleOutlined,
    BellOutlined,
} from '@ant-design/icons';

const { Header, Footer,Sider, Content } = Layout;
class Layoutall extends React.Component{
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };  
render (){
    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="sider-children">
                    <div >
                        <img srl="./logo.f0355d39.svg"/>
                        <h1 className="logo" >
                            <span>ant design</span>
                        </h1>
                    </div>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <UserOutlined />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </Sider>
            <Layout className="site-layout">
                <Header class= "header">
                    <div class= "header-menu">
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'header-menu-trigger',
                            onClick: this.toggle,
                        })}
                        <span className="header-menu-right">
                            <div className ="header-menu-right-search">
                                <SearchOutlined />
                                <div className= "header-menu-right-search-input">
                                    <input></input>
                                </div>
                            </div>
                            <div class = "header-menu-right-file">
                                <Tooltip placement="bottom" title="use file">
                                    <QuestionCircleOutlined/>
                                </Tooltip>
                            </div>
                            <div class="header-menu-right-badge">
                                <Badge  count={11}>
                                    <span class="header-menu-right-badge-logo">
                                        <BellOutlined />
                                    </span>
                                </Badge>
                            </div>
                        </span>
                       
                    </div>
                    
                </Header>
                <div>
                    <contents/>
                </div>
                <Footer className="footer">
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}
}

export default Layoutall;