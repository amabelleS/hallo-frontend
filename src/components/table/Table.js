import React from 'react';
import { useFetchApiForTable } from '../../hooks/useFetchApiForTable';

import './Table.css';

const Table = () => {
  const { maxSalaryByJob, avgSalary } = useFetchApiForTable();

  const zip = (a1, a2) =>
    a1.map((x, i) => {
      return {
        ...x,
        ...a2[i],
      };
    });

  const tableInfo = zip(maxSalaryByJob, avgSalary);

  const renderTableHeader = () => {
    const headers = [
      'Job',
      'Avg Salary',
      'Person name with the highest salary in this job',
    ];
    return headers.map((job, i) => {
      return <th key={i}>{job.toUpperCase()}</th>;
    });
  };

  const renderTableRows = () => {
    return tableInfo.map((job, i) => {
      //  const { job, max, avg } = job;
      return (
        <tr key={i}>
          <td style={{ color: 'black' }}>{job.job}</td>
          <td>{job.max}</td>
          <td>{job.avg}</td>
        </tr>
      );
    });
  };
  return (
    <table>
      <tbody>
        <tr>{renderTableHeader()}</tr>
        {renderTableRows()}
      </tbody>
    </table>
  );
};

export default Table;
