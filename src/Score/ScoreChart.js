import React, { Component } from "react";
import { Dimensions, ScrollView } from "react-native";
import Echarts from "native-echarts";

const { width, height } = Dimensions.get("window");
export class ScoreChart extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        var option = {
            title: {
                show: false
            },
            tooltip: {
                trigger: "axis",
                formatter: null,
                transitionDuration: 0.4,
                textStyle: {
                    color: "#555"
                },
                backgroundColor: "rgba(255,255,255,0.7)",
                borderColor: "rgba(0,0,0,0.5)",
                borderRadius: 2,
                borderWidth: 1,
                padding: 5
            },
            legend: {
                data: ["分数"]
            },
            calculable: true,
            xAxis: [
                {
                    type: "value",
                    boundaryGap: [0, 0.01]
                }
            ],
            yAxis: [
                {
                    type: "category",
                    data: [">90", "80-90", "70-80", "60-70", "<60"]
                }
            ],
            series: [
                {
                    type: "bar",
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = [
                                    "#fdad8b",
                                    "#6cc2e6",
                                    "#a0d462",
                                    "#ea98b5",
                                    "#b6a4db"
                                ];
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                    data: [
                        this.props.scoreStat[0].percent.toFixed(2),
                        this.props.scoreStat[1].percent.toFixed(2),
                        this.props.scoreStat[2].percent.toFixed(2),
                        this.props.scoreStat[3].percent.toFixed(2),
                        this.props.scoreStat[4].percent.toFixed(2)
                    ]
                }
            ]
        };

        return (
            <ScrollView
                horizontal
                style={{
                    marginHorizontal: 10,
                    height: height * 0.35
                }}
            >
                <Echarts
                    option={option}
                    height={height * 0.35}
                    width={width * 0.8}
                />
            </ScrollView>
        );
    }
}

export default ScoreChart;
