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
                height={60} 
                width={350} 
                padding={[20, 30, 5, 5]}
                data={data} scale={cols} forceFit>
                    <Legend />
                    <Tooltip
                        crosshairs={{
                            title: "data.temperature",
                            fillOpacity:0.1,
                        }}
                        position={'left','right'}
                        inPlot={true}
                        offset={30}
                        Opacity={0.5}
                    />
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

export default Chart2;
/*
<Geom
    type="point"
    position="month*temperature"
    size={4}
    shape={"circle"}
    color={"city"}
    style={{
        stroke: "#fff",
        lineWidth: 1
    }}
/>
<Geom
                        type="line"
                        position="month*temperature"
                        size={2}
                        color={"city"}
                        shape={"smooth"}
                    />
*/