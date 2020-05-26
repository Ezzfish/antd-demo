import React from 'react';
import { Layout, Menu, Tooltip, Badge, Dropdown, Avatar } from 'antd';
import 'antd/dist/antd.css';
import Contents from './Contents'
import axios from 'axios'
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

const { Header, Footer,Sider} = Layout;

const rightmenu = (
    <Menu>
        <Menu.Item key="0">
            <div>
                <UserAddOutlined />个人中心
            </div>   
        </Menu.Item>
        <Menu.Item key="1">
            <div>
                <SettingOutlined />个人设置
            </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" >
            <div>
                <LogoutOutlined />退出登录
            </div>
    </Menu.Item>
    </Menu>
)

const languagemenu = (
    <Menu>
        <Menu.Item key="0">
            <div>
                简体中文
            </div>
        </Menu.Item>
        <Menu.Item key="1">
            <div>
                繁体中文
            </div>
        </Menu.Item>
        <Menu.Item key="3" >
            <div>
                English
            </div>
        </Menu.Item>
    </Menu>
);

class Layoutall extends React.Component{
    state = {
        collapsed: false,
        data:0
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };  
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/Layout`)
            .then(function (response) {
                t.setState({ data: response.data.number })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render (){
    return(
        <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="sider-children">

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="0">
                            <span className="sider-children-logo1" >
                                ant 
                            </span>
                            <span className="sider-children-logo2" >
                                 design
                            </span>    
                        </Menu.Item>
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
                <Header style={{padding:0}}>
                    <div className= "header-menu">
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
                            <div className = "header-menu-right-file">
                                <Tooltip placement="bottom" title="use file">
                                    <QuestionCircleOutlined/>
                                </Tooltip>
                            </div>
                            <div className="header-menu-right-badge">
                                <Badge  count={this.state.data}>
                                    <span className="header-menu-right-badge-logo">
                                        <BellOutlined />
                                    </span>
                                </Badge>
                            </div>
                            <div className="header-menu-right-user">
                                <Dropdown overlay={rightmenu}>
                                    <div className="header-menu-right-use-dropdown-link" onClick={e => e.preventDefault()}>
                                        <span className="header-menu-right-use-dropdown-link-a">
                                            <Avatar >u</Avatar>
                                        </span>
                                        <span>Ezzfish</span>   
                                    </div>
                                </Dropdown>
                            </div>
                            <div className="header-menu-right-language">
                                <Dropdown overlay={languagemenu}>
                                    <GlobalOutlined />
                                </Dropdown>
                            </div>
                        </span>
                       
                    </div>
                    
                </Header>
                <div>
                    <Contents/>
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