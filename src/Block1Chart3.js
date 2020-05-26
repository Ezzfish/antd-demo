import React from "react";
import {
    Chart,
    Geom,
    Tooltip,
} from "bizcharts";
import axios from 'axios'
class Chart3 extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/Block1/payChart`)
            .then(function (response) {
                t.setState({ data: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const cols = {
            year: { range: [0.05, 0.95] }
        };
        return (
            <Chart
                height={45}
                data={this.state.data}
                scale={cols}
                autoFit
                pure
            >
                <Tooltip position={'left'} />
                <Geom type="interval" position="year*sales" />
            </Chart>
        );
    }
}
export default Chart3;