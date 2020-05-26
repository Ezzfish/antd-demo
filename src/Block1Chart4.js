import React from "react";
import {
    Chart,
    Geom,
    Coord,
} from "bizcharts";
import axios from 'axios'

class Chart4 extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        var t = this
        axios.get(`http://localhost:8000/Block1/populationChart`)
            .then(function (response) {
                t.setState({ data: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const cols = {
            population: {
                ticks: [0, 100],
            }
        }
        return (
            <div>
                <Chart
                    height={45}
                    data={this.state.data}
                    scale={cols}
                    pure
                    autoFit
                >
                    <Coord transpose />
                    <Geom type="interval" color="rgb(19,194,194)" position="1*population" />
                </Chart>
            </div>
        );
    }
}


export default Chart4;