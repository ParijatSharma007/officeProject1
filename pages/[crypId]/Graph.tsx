import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

interface ChartInterface {
    yAxis : number[],
    xAxis : number[]
}

function Graph({yAxis, xAxis} : ChartInterface) {
  return (
    <BarChart
      series={[
        { data: yAxis },
      ]}
      xAxis={[{ data: xAxis, scaleType: 'band' }]}
      width={850}
      height={300}
    />
  );
}

export default React.memo(Graph, (prevProps, postProps) => prevProps === postProps)
