import React from "react";
import {
    G2,
    Chart,
    Geom,
    Axis,
    Coord,
    Tooltip,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";

class BLockThreeChartTwo extends React.Component{
    render(){
        const data = [
            { item: '家用电器', count: 4544, percent: 0.2879 },
            { item: '食用酒水', count: 3321, percent: 0.2104 },
            { item: '个户健康', count: 3113, percent: 0.1973 },
            { item: '服饰箱包', count: 2341, percent: 0.1483 },
            { item: '母婴用品', count: 1231, percent: 0.078 },
            { item: '其他', count: 1231, percent: 0.078 },
        ];

        const cols = {
            percent: {
                formatter: val => (val = `${val * 100}%`),
            },
        };

        return(
            <div style={{size:400*400}}>
                <Chart
                    height={400}
                    width={400}
                    data={data}
                    scale={cols}
                    forceFit
                >
                    <Coord type="theta" radius={0.65} innerRadius={0.75}/>
                    <Legend
                        position="right"
                    />
                    <Tooltip
                        showTitle={false}
                        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                    />
                    <Geom
                        type="interval"
                        position="precent"
                        color="item"
                        Tooltip={[
                            'item*percent',
                            (item,percent)=>{
                                percent=`${percent*100}%`
                                return{
                                    name:item,
                                    value:percent,
                                }
                            }
                        ]}
                    />
                </Chart>
            </div>
        )
    }
}

export default BLockThreeChartTwo;
