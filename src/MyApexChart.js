import React from "react";

import Chart from "react-apexcharts";

import moment from "moment";

class MyApexChart extends React.Component {
  constructor() {
    super();

    this.state = {
      options: {
        chart: {
          id: "Apex-Chart"
        },
        annotations: {
          points: [
            {
              x: "1/14/2019",
              // seriesIndex: 0,
              label: {
                borderColor: "#775DD0",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#775DD0"
                },
                text: "Say something here!!!"
              }
            }
          ]
        },
        xaxis: {
          // type: "category",
          type: "datetime",
          // tickAmount: 13,
          tickAmount: 20,
          tickPlacement: "on",
          labels: {
            rotateAlways: true,
            /*
            datetimeFormatter: {
              day: "MM/dd/yyyy",
              month: "MM/dd/yyyy",
              year: "MM/dd/yyyy"
            }
            */
            maxHeight: 120,
            minHeight: 120,
            formatter: function(val, timestamp) {
              console.log("What is val?");
              console.log(val);
              console.log("What is timestamp");
              console.log(timestamp);
              // return moment(timestamp).format("MM/dd/yyyy");
              return moment(timestamp).format("MM/DD/YYYY");
              // return val;
              // return "blah";
            }
          },

          /*tooltip: {
            enabled: true,
            custom: function() {
              return "sdfsdfsdf";
            }
            // custom: function({ series, seriesIndex, dataPointIndex, w }) {
            //   return (
            //     '<div class="arrow_box">' +
            //     "<span>" +
            //     series[seriesIndex][dataPointIndex] +
            //     "</span>" +
            //     "</div>"
            //   );
            // }
            // formatter: function(val, opts) {
            //   return "This says something";
            // }
          },*/
          // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          categories: [
            "11/8/2018",
            "11/9/2018",
            "11/10/2018",
            "11/11/2018",
            "11/12/2018",
            "11/13/2018",
            "11/14/2018",
            "11/15/2018",
            "11/16/2018",
            "11/17/2018",
            "11/18/2018",
            "11/19/2018",
            "11/20/2018",
            "11/21/2018",
            "11/22/2018",
            "11/23/2018",
            "11/24/2018",
            "11/25/2018",
            "11/26/2018",
            "11/27/2018",
            "11/28/2018",
            "11/29/2018",
            "11/30/2018",
            "12/1/2018",
            "12/2/2018",
            "12/3/2018",
            "12/4/2018",
            "12/5/2018",
            "12/6/2018",
            "12/7/2018",
            "12/8/2018",
            "12/9/2018",
            "12/10/2018",
            "12/11/2018",
            "12/12/2018",
            "12/13/2018",
            "12/14/2018",
            "12/15/2018",
            "12/16/2018",
            "12/17/2018",
            "12/18/2018",
            "12/19/2018",
            "12/20/2018",
            "12/21/2018",
            "12/22/2018",
            "12/23/2018",
            "12/24/2018",
            "12/25/2018",
            "12/26/2018",
            "12/27/2018",
            "12/28/2018",
            "12/29/2018",
            "12/30/2018",
            "12/31/2018",
            "1/1/2019",
            "1/2/2019",
            "1/3/2019",
            "1/4/2019",
            "1/5/2019",
            "1/6/2019",
            "1/7/2019",
            "1/8/2019",
            "1/9/2019",
            "1/10/2019",
            "1/11/2019",
            "1/12/2019",
            "1/13/2019",
            "1/14/2019",
            "1/15/2019",
            "1/16/2019",
            "1/17/2019",
            "1/18/2019",
            "1/19/2019",
            "1/20/2019",
            "1/21/2019",
            "1/22/2019",
            "1/23/2019",
            "1/24/2019",
            "1/25/2019",
            "1/26/2019",
            "1/27/2019",
            "1/28/2019",
            "1/29/2019",
            "1/30/2019",
            "1/31/2019",
            "2/1/2019",
            "2/2/2019",
            "2/3/2019",
            "2/4/2019",
            "2/5/2019"
          ]
          /*labels: {
            // show: false
            // rotate: true
            // hideOverlappingLabels: true
          },*/
          // tickAmount: 7
          // axisTicks: {
          //   show: false
          // },
          /*axisTicks: {
            show: true,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0
          },*/
          /*labels: {
            hideOverlappingLabels: true
          },*/
          // tickAmount: "dataPoints"
          // tickAmount: 13
          // tickAmount: 7
        }
        /*yaxis: {
          // max: 2
          tickAmount: 5
        }*/
      },
      series: [
        {
          name: "Daily Views",
          // data: [30, 40, 45, 50, 49, 60, 70, 91]
          data: [
            0,
            0,
            0,
            5,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      ]
      /*tooltip: {
        style: {
          padding: 0,
          textTransform: "uppercase",
          fontFamily: "CostarBrownLight",
          textAlign: "center"
        }
      }*/
      /*annotations: {
        points: [
          {
            x: "11/11/2018",
            y: 3,
            label: {
              text: "Something here!!!"
            }
          }
        ]
      }*/
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={900}
        height={400}
      />
    );
  }
}

export default MyApexChart;
