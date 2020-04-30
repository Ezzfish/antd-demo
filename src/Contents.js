import React, { Component } from 'react';
import { Button, } from 'antd';
import './App.css';
import Block1 from './Block1'

class Contents extends React.Component{
    render(){
        return(
            <div className = 'Contents' >
                <main class="Contents-main">
                    <div class="Contents-main-wrap">
                        <div class="Contents-main-grid">
                            <Block1/>
                            <div class="Contents-main-wrap-block2" ></div>
                            <div class="Contents-main-wrap-block3" ></div>
                            <div class="Contents-main-wrap-block4" ></div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Contents;