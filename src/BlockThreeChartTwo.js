import React from "react";
import {
    Chart,
    Geom,
    Coordinate,
    Tooltip,
    Legend,
    Annotation,
} from "bizcharts";
import axios from 'axios'
function numberChange(number) {
    var numberHigh = (number - (number % 1000)) / 1000
    var numberLow = number - (numberHigh * 1000)
    if (number <= 999) {
        return (number)
    }
    if (numberLow <= 99 && numberLow >= 10) {
        return (`${numberHigh},0${numberLow}`)
    }
    if (numberLow <= 9) {
        return (`${numberHigh},00${numberLow}`)
    }
    else {
        return (`${numberHigh},${numberLow}`)
    }
}
class BLockThreeChartTwo extends React.Component{
    state={
        data:[],
        value:0
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/BlockThreeChartTwo`)
            .then(function (response) {
                t.setState({
                    data: response.data.data,
                    value: response.data.value,
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(
            <div>
                <Chart
                    height={450}
                    data={this.state.data}
                    autoFit
                >   
                    <Annotation.Text
                        position={['50%', '45%']}
                        content="销售额"
                        style={{
                            lineHeight: '240px',
                            fontSize: '20',
                            fill: '#262626',
                            textAlign: 'center',
                        }}
                    />  
                    <Annotation.Text
                        position={['50%', '55%']}
                        content={numberChange(this.state.value)}
                        style={{
                            lineHeight: '240px',
                            fontSize: '30',
                            fill: '#262626',
                            textAlign: 'center',
                        }}
                    />  
                    <Coordinate type="theta" radius={0.65} innerRadius={0.75}/>
                    <Legend 
                        position="right"
                    />
                    <Tooltip showTitle = {false} />
                    <Geom
                        type="interval"
                        position="value"
                        color="name"
                        adjust={["stack"]}
                    />
                </Chart>
            </div>
        )
    }
}

export default BLockThreeChartTwo;
