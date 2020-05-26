import React from "react";
import {
    Chart,
    Geom,
    Tooltip,
} from "bizcharts";
import axios from 'axios'
class Chart2 extends React.Component {
    state={
        data:[]
    }
    componentDidMount(){
        var t = this
        axios.get(`http://localhost:8000/Block1/visitChart`)
            .then(function (response) {
                t.setState({data: response.data.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return (
            <div>
                <Chart
                    height={45}
                    data={this.state.data}
                    pure 
                    autoFit    
                >
                    <Tooltip position={'left'}/>
                    <Geom
                        type="area"
                        position="month*temperature"
                        color="rgb(100,0,255)"
                        shape="smooth" />
                </Chart>
            </div>
        );
    }
}

export default Chart2;
