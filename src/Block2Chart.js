import React from "react";
import {
    Chart,
    Geom,
} from "bizcharts";
import axios from 'axios'
class Block2Chart extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/BlockTwoChart`)
            .then(function (response) {
                t.setState({ data: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const cols = {
            value: {
                ticks: [0, 40, 80, 120, 160, 200],
            },
            month: {
                tickCount: 9,
                range:[0.05,0.95]
            }
        };
        return (
            <div style={{ paddingLeft: 32, paddingBottom: 32 }}>
                <h4 style={{ marginBottom: 20 }}>{this.props.name}</h4>
                <Chart
                    height={284}
                    data={this.state.data} scale={cols}
                    autoFit
                >
                    <Geom type="interval" position="month*value" />
                </Chart>
            </div>
        );
    }
}

export default Block2Chart;