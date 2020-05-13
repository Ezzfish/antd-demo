import React from "react";
import {
    Chart,
    Geom,
    Coord,
    Label,
    Guide,
    Shape,
    Facet,
    Util,
    Coordinate,
    Interval,
    Axis,
    Tooltip,
    Legend,
    View,
    Annotation,
} from "bizcharts";

function BLockFourTabChart(values,i) {
    var data = [
        { name: '1', value: values[i]},
        { name: '2', value: 100 - values[i] },
    ];
    return (
        <div style={{ width: 100, height: 60 }}>
            <Chart
                data={data}
                autoFit
                pure
            >
                <Coordinate type="theta" radius={0.65} innerRadius={0.55} />
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
export default BLockFourTabChart;
