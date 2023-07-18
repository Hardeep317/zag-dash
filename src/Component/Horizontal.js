import React, { useEffect } from 'react'
import ApexCharts from "apexcharts";

function Horizontal() {

    useEffect(() => {
        var options = {
            series: [{
            data: [90]
          }],
            chart: {
            type: 'bar',
            height: 100,
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [''],
          }
          };
  
          var chart = new ApexCharts(document.querySelector(".chart"), options);
          chart.render();
    },[]);

  return (
    <div className='chart'></div>
  )
}

export default Horizontal