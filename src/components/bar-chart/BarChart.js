import React from 'react';
import { useFetchPopularity } from '../../hooks/useFetchPopularity';

const BarChart = () => {
  const jobsPopularity = useFetchPopularity();
  console.log(
    '🚀 ~ file: BarChart.js ~ line 6 ~ BarChart ~ jobsPopularity',
    jobsPopularity
  );
  return <div>BarChart</div>;
};

export default BarChart;
