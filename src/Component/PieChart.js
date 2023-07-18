import ApexCharts from "apexcharts";
import { useEffect } from "react";

const RadialBarChart = ({series,color }) => {
  useEffect(() => {
    var options = {
      chart: {
        height: 130,
        type: "radialBar",
        color: color,
        width: '130px'
      },

      series: [series],
      
      colors:[color],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            size: "50%",
            color: color,
            startAngle: 359,
            endAngle: 0,
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: color,
              fontSize: "13px",
            },
            value: {
                offsetY: -10,
              color: color,
              fontSize: "15px",
              show: true,
            },
          },
        },
      },

      stroke: {
        lineCap: "round",
      },
      labels: [""],
    };

    var chart = new ApexCharts(document.querySelector(".chart"), options);

    chart.render();
  }, []);
  return (
    // <Charts option={options} />
    <div className="chart m-auto flex items-center"></div>
  );
};

export default RadialBarChart;
