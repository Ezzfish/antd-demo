import React from "react";
import {
    Chart,
    Line,
    Axis,
    Tooltip,
    Legend,
} from "bizcharts";
import axios from 'axios'
class BlockFourContentChart extends React.Component {
    state = {
        data: [
            { name: 'passenge', time: "13:09", value: 45, },
            { name: 'passenge', time: "13:39", value: 68, },
            { name: 'passenge', time: "14:09", value: 70, },
            { name: 'passenge', time: "14:39", value: 80, },
            { name: 'passenge', time: "15:09", value: 66, },
            { name: 'passenge', time: "15:39", value: 33, },
            { name: 'passenge', time: "16:09", value: 70, },
            { name: 'passenge', time: "16:39", value: 54, },
            { name: 'passenge', time: "17:09", value: 28, },
            { name: 'passenge', time: "17:39", value: 37, },
            { name: 'passenge', time: "18:09", value: 95, },
            { name: 'passenge', time: "18:39", value: 58, },
            { name: 'passenge', time: "19:09", value: 83, },
            { name: 'passenge', time: "19:39", value: 21, },
            { name: 'passenge', time: "20:09", value: 70, },
            { name: 'passenge', time: "20:39", value: 51, },
            { name: 'passenge', time: "21:09", value: 21, },
            { name: 'passenge', time: "21:39", value: 97, },
            { name: 'passenge', time: "22:09", value: 48, },
            { name: 'payment', time: "13:09", value: 86 },
            { name: 'payment', time: "13:39", value: 32 },
            { name: 'payment', time: "14:09", value: 59 },
            { name: 'payment', time: "14:39", value: 34 },
            { name: 'payment', time: "15:09", value: 17 },
            { name: 'payment', time: "15:39", value: 90 },
            { name: 'payment', time: "16:09", value: 78 },
            { name: 'payment', time: "16:39", value: 70 },
            { name: 'payment', time: "17:09", value: 56 },
            { name: 'payment', time: "17:39", value: 19 },
            { name: 'payment', time: "18:09", value: 83 },
            { name: 'payment', time: "18:39", value: 53 },
            { name: 'payment', time: "19:09", value: 64 },
            { name: 'payment', time: "19:39", value: 79 },
            { name: 'payment', time: "20:09", value: 102 },
            { name: 'payment', time: "20:39", value: 75 },
            { name: 'payment', time: "21:09", value: 103 },
            { name: 'payment', time: "21:39", value: 75 },
            { name: 'payment', time: "22:09", value: 87 },
         ],
        array:[],
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/BlockFourContent`)
            .then(function (response) {
                setTimeout(()=>{
                    t.setState({array: response.data.array})
                    t.setState({ array: t.state.array.concat(response.data.arraypayment)})
                    console.log(t.state.array)
                },0)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const scale = {
            value: { ticks: [0, 20, 40, 60, 80, 100, 120], },
            time: { tickCount: 9 }
        }
        return (
            <div>
                <Chart
                    padding={[30, 20, 50, 40]}
                    autoFit
                    height={400}
                    data={this.state.array}

                    scale={scale}
                >
                    <Axis name="value" />
                    <Tooltip shared />
                    <Legend name='name' position="top" offsetY={-5} />
                    <Line position="time*value" color={['name', ['#60f050', '#1f1e33']]} />
                </Chart>
            </div>
        )
    }
}
export default BlockFourContentChart