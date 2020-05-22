import React from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
} from "bizcharts";
import { withResizeDetector } from "react-resize-detector";
class Chart2 extends React.Component {
    render() {
        const data = [
            {
                month: "Jan",
                city: "Tokyo",
                temperature: 7
            },
            {
                month: "Feb",
                city: "Tokyo",
                temperature: 6.9
            },
            {
                month: "Mar",
                city: "Tokyo",
                temperature: 9.5
            },
            {
                month: "Apr",
                city: "Tokyo",
                temperature: 14.5
            },
            {
                month: "May",
                city: "Tokyo",
                temperature: 18.4
            },
            {
                month: "Jun",
                city: "Tokyo",
                temperature: 21.5
            },
            {
                month: "Jul",
                city: "Tokyo",
                temperature: 25.2
            },
            {
                month: "Aug",
                city: "Tokyo",
                temperature: 26.5
            },
            {
                month: "Sep",
                city: "Tokyo",
                temperature: 23.3
            },
            {
                month: "Oct",
                city: "Tokyo",
                temperature: 18.3
            },
            {
                month: "Nov",
                city: "Tokyo",
                temperature: 13.9
            },
            {
                month: "Dec",
                city: "Tokyo",
                temperature: 9.6
            },
        ];
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        return (
            <div>
                <Chart
                    width={this.props.width}
                    height={this.props.height}
                    data={data} scale={cols} >
                    <Legend />
                    <Tooltip
                        crosshairs={{
                            title: "data.temperature",
                            fillOpacity: 0.1,
                        }}
                        position={'left'}
                        inPlot={true}
                        offset={30}
                        Opacity={0.5}
                    />
                    <Axis name="month" visible={false} />
                    <Axis name="temperature" visible={false} />
                    <Geom
                        type="area"
                        position="month*temperature"
                        size={2}
                        color="rgb(100,0,255)"
                        shape="smooth" />
                </Chart>
            </div>
        );
    }
}

export default withResizeDetector(Chart2);
