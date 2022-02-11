import React from 'react';
import { useFetchPopularity } from '../../hooks/useFetchPopularity';
import { __COLORS__ } from './colors';

import './BarChart.css';

const BarChart = () => {
  const jobsPopularity = useFetchPopularity();

  const jobsToChart = jobsPopularity.map((job, i) => {
    let popularityLogScale = Math.log10(job.popularity);
    return {
      name: job.job,
      popularity: job.popularity,
      popularityLogScale,
      colors: __COLORS__[i],
    };
  });
  console.log(
    '🚀 ~ file: BarChart.js ~ line 19 ~ jobsToChart ~ jobsToChart',
    jobsToChart
  );
  return (
    <div className="container">
      <div className="main">
        {jobsToChart.length > 0 &&
          jobsToChart.map((job, i) => {
            return (
              <div key={i} className="bar-chart">
                <div className="number" style={{ color: job.colors[1] }}>
                  {job.popularity}
                </div>
                <div
                  className="bar"
                  style={{
                    height: job.popularity * 3,
                    // height: job.popularityLogScale * 111,
                    backgroundImage: `linear-gradient(
                        to bottom,
                        ${job.colors[0]},
                        ${job.colors[1]}
                      )`,
                  }}
                ></div>
                <p className="name center">{job.name}</p>
              </div>
            );
          })}
      </div>
      <div className="base"></div>
    </div>
  );
};

export default BarChart;
