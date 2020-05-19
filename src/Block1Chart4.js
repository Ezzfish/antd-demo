import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Coord,
} from "bizcharts";
import  { withResizeDetector } from "react-resize-detector";
class Chart4 extends React.Component {
    render() {
        const data = [
            {
                country: "中国",
                population: 78
            }
        ]
        return (
            <div>
                <Chart
                    width={this.props.width}
                    height={this.props.height}
                    data={data} >

                    <Axis name="population" visible={false} />
                    <Coord transpose />
                    <Geom type="interval" color="rgb(19,194,194)" position="population*0.01" />
                </Chart>
            </div>
        );
    }
}


export default withResizeDetector(Chart4);