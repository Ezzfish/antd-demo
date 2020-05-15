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
        {
            time: "13:09",
            passenge: 45,
            payment: 86
        },
        {
            time: "13:39",
            passenge: 68,
            payment: 32
        }, {
            time: "14:09",
            passenge: 70,
            payment: 59
        }, {
            time: "14:39",
            passenge: 80,
            payment: 34
        }, {
            time: "15:09",
            passenge: 66,
            payment: 17
        }, {
            time: "15:39",
            passenge: 33,
            payment: 90
        },
        {
            time: "16:09",
            passenge: 70,
            payment: 78
        },
        {
            time: "16:39",
            passenge: 54,
            payment: 70
        },
        {
            time: "17:09",
            passenge: 28,
            payment: 56
        },
        {
            time: "17:39",
            passenge: 37,
            payment: 19
        },
        {
            time: "18:09",
            passenge: 95,
            payment: 83
        },
        {
            time: "18:39",
            passenge: 58,
            payment: 53
        },
        {
            time: "19:09",
            passenge: 83,
            payment: 64
        },
        {
            time: "19:39",
            passenge: 21,
            payment: 79
        },
        {
            time: "20:09",
            passenge: 70,
            payment: 102
        },
        {
            time: "20:39",
            passenge: 51,
            payment: 75
        },
        {
            time: "21:09",
            passenge: 21,
            payment: 103
        },
        {
            time: "21:39",
            passenge: 97,
            payment: 75
        },
        {
            time: "22:09",
            passenge: 48,
            payment: 87
        },
    ];
    const scale = {
        passenge: {
            ticks: [0, 20, 40, 60, 80, 100, 120],
        },
        payment: {
            ticks: [0, 20, 40, 60, 80, 100, 120]
        },
        time:{
            tickCount:9
        }
    }
  
    return (
        <div>
            <Chart
                padding={[10, 20, 50, 40]}
                autoFit
                height={400}
                data={data}
                scale={scale}
            >
                <Axis name="passenge"/>
                <Axis name="payment" visible={false} />
                <Tooltip shared/>
                <Line position="time*passenge" color='#60f050'/>
                <Line position="time*payment" color='#1890ff'/>
            </Chart>
        </div>
    )
}

export default BlockFourContentChart