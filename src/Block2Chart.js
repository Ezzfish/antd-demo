import React from "react";
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import ReactResizeDetector, { withResizeDetector } from "react-resize-detector";
class Block2Chart extends React.Component {
    render() {
        const data = [
            {
                month: "1月",
                sales: 38
            },
            {
                month: "2月",
                sales: 52
            },
            {
                month: "3月",
                sales: 61
            },
            {
                month: "4月",
                sales: 145
            },
            {
                month: "5月",
                sales: 48
            },
            {
                month: "6月",
                sales: 38
            },
            {
                month: "7月",
                sales: 14
            },
            {
                month: "8月",
                sales: 35
            },
            {
                month: "9月",
                sales: 12
            },
            {
                month: "10月",
                sales: 23
            },
            {
                month: "11月",
                sales: 65
            },
            {
                month: "12月",
                sales: 23
            }
        ];
        const cols = {
            sales: {
                tickInterval: 20
            }
        };
        return (
            <div style={{ paddingLeft:32,paddingBottom:32}}>
                <h4 style={{ marginBottom: 20 }}>{this.props.name}</h4>
                <Chart
                    height={284}
                    width={this.props.width-32}
                    data={data} scale={cols}>
                    <Axis name="month" />
                    <Axis name="sales" />
                    <Tooltip
                        crosshairs={{
                            title: "data.temperature",
                            fillOpacity: 0.1,
                        }}
                        position={'left', 'right'}
                        inPlot={true}
                        offset={30}
                        Opacity={0.5}
                    />
                    <Geom type="interval" position="month*sales" />
                </Chart>
            </div>
        );
    }
}

export default withResizeDetector(Block2Chart);