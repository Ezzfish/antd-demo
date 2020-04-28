import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Tooltip, Badge, Dropdown, Avatar } from 'antd';
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
    UserAddOutlined,
    SettingOutlined,
    LogoutOutlined,
    GlobalOutlined,
} from '@ant-design/icons';

const { Header, Footer,Sider, Content } = Layout;

const rightmenu = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" >
                <UserAddOutlined />个人中心
            </a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" >
                <SettingOutlined />个人设置
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" >
            <a target= "_blank" rel="noopener noreferrer">
                <LogoutOutlined />退出登录
            </a>   
    </Menu.Item>
    </Menu>
)

const languagemenu = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" >
                简体中文
            </a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" >
                繁体中文
            </a>
        </Menu.Item>
        <Menu.Item key="3" >
            <a target="_blank" rel="noopener noreferrer">
                English
            </a>
        </Menu.Item>
    </Menu>
);

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
                            <div class="header-menu-right-user">
                                <Dropdown overlay={rightmenu}>
                                    <a class="header-menu-right-use-dropdown-link" onClick={e => e.preventDefault()}>
                                        <span class="header-menu-right-use-dropdown-link-a">
                                            <Avatar >u</Avatar>
                                        </span>
                                        <span>Ezzfish</span>   
                                    </a>
                                </Dropdown>
                            </div>
                            <div class="header-menu-right-language">
                                <Dropdown overlay={languagemenu}>
                                    <GlobalOutlined />
                                </Dropdown>
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