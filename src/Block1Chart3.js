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

class Chart3 extends React.Component {
    render() {
        const data = [
            {
                year: "1951 年",
                sales: 38
            },
            {
                year: "1952 年",
                sales: 52
            },
            {
                year: "1956 年",
                sales: 61
            },
            {
                year: "1957 年",
                sales: 145
            },
            {
                year: "1958 年",
                sales: 48
            },
            {
                year: "1959 年",
                sales: 38
            },
            {
                year: "1960 年",
                sales: 38
            },
            {
                year: "1962 年",
                sales: 38
            }
        ];
        const cols = {
            sales: {
                tickInterval: 20
            }
        };
        return (
            <div>
                <Chart 
                height={50}
                width={"auto"}
                    padding={"auto"}
                data={data} scale={cols} forceFit>
                    <Axis name="year" visible={false} />
                    <Axis name="sales" visible={false} />
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
                    <Geom type="interval" position="year*sales" />
                </Chart>
            </div>
        );
    }
}

export default Chart3;