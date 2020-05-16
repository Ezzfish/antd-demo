import React from "react";
import {
    Chart,
    Line,
    Point,
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
import Grid from "antd/lib/card/Grid";

function BlockFourContentChart() {
    const data = [
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
    ];
    const scale = {
        value: {
            ticks: [0, 20, 40, 60, 80, 100, 120],
        },
        time: {
            tickCount: 9
        }
    }

    return (
        <div>
            <Chart
                padding={[30, 20, 50, 40]}
                autoFit
                height={400}
                data={data}
                scale={scale}
            >
                <Axis name="value" />
                <Tooltip shared />
                <Legend name='name' position="top" offsetY={-5} />
                <Line position="time*value" color={['name', ['#60f050', '#1890ff']]} />
            </Chart>
        </div>
    )
}

export default BlockFourContentChart