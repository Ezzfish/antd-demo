import React, { Component } from 'react';
import { Button, } from 'antd';
import './App.css';
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import BlockFour from './BlockFour.js'

class Contents extends React.Component{
    render(){
        return(
            <div className = 'Contents' >
                <main class="Contents-main">
                    <div class="Contents-main-wrap">
                        <div class="Contents-main-grid">
                            <Block1/>
                            <Block2/>
                            <Block3/>
                            <BlockFour/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Contents;