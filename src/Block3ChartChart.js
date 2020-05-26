import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
} from "bizcharts";
import axios from 'axios'
class BlockChart extends React.Component {
    state={
        data:[]
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/Block1/visitChart`)
            .then(function (response) {
                t.setState({ data: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        return (
            <div >
                <Chart
                    height={50}
                    data={this.state.data}
                    scale={cols}
                    autoFit
                    pure
                >
                    <Tooltip position={'left'}/>
                    <Geom
                        type="area"
                        position="month*temperature"
                        shape="smooth" />
                    <Geom
                        type="line"
                        position="month*temperature"
                    />
                </Chart>
            </div>
        );
    }
}

export default BlockChart;