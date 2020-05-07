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
                    height={60}
                    width={"auto"}
                    padding={[0, 0, 20, 10]}
                    data={data} forceFit>
                    >
                    <Coord transpose />
                    <Geom type="interval" color="rgb(19,194,194)" position="population*0.01" />
                </Chart>
            </div>
        );
    }
}


export default Chart4;