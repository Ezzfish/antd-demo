import React from "react";
import {
    Chart,
    Geom,
    Coordinate,
    Tooltip,
    Legend,
    Annotation,
} from "bizcharts";

class BLockThreeChartTwo extends React.Component{
    render(){
        const data = [
            { name: '家用电器', value: 28.79 },
            { name: '食用酒水', value: 21.04 },
            { name: '个户健康', value: 19.73 },
            { name: '服饰箱包', value: 14.83 },
            { name: '母婴用品', value: 13.8 },
            { name: '其他', value: 9.0 },
        ];

        return(
            <div>
                <Chart
                    height={446}
                    data={data}
                    autoFit
                >   
                    <Annotation.Text
                        position={['50%', '45%']}
                        content="销售额"
                        style={{
                            lineHeight: '240px',
                            fontSize: '20',
                            fill: '#262626',
                            textAlign: 'center',
                        }}
                    />  
                    <Annotation.Text
                        position={['50%', '55%']}
                        content="¥15,781"
                        style={{
                            lineHeight: '240px',
                            fontSize: '30',
                            fill: '#262626',
                            textAlign: 'center',
                        }}
                    />  
                    <Coordinate type="theta" radius={0.65} innerRadius={0.75}/>
                    <Legend 
                        position="right"
                    />
                    <Tooltip showTitle = {false} />
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
}

export default BLockThreeChartTwo;
