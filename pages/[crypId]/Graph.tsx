import * as React from 'react';

import dynamic from 'next/dynamic';
const Chart =dynamic(()=>import('react-apexcharts'),{ssr:false})

interface ChartInterface {
    yAxis : number[],
    xAxis : number[]
}

function Graph({yAxis, xAxis} : ChartInterface) {

  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: xAxis
      }
    },
    series: [
      {
        name: "series-1",
        data: yAxis
      }
    ]
  };


  return (
    <Chart
    options={state.options}
    series={state.series}
    type="line"
    width="800"
  />
  );
}

export default React.memo(Graph, (prevProps, postProps) => prevProps === postProps)
