import { useState, useEffect } from 'react';

export const useFetchApiForTable = () => {
  const [maxSalaryByJob, setMaxSalaryByJob] = useState({});
  const [avgSalary, setAvgSalary] = useState([]);

  const baseURL = 'http://localhost:8080/salary/';

  const fetchAvgSalary = async () => {
    try {
      const response = await fetch(`${baseURL}avg`);
      const data = await response.json();
      console.log(
        '🚀 ~ file: useFetchApiForTable.js ~ line 12 ~ fetchAvgSalary ~ data',
        data
      );
      return data;
    } catch (error) {}
  };

  const fetchMaxSalaryByJob = async () => {
    const allJobs = [];
    const response = await fetch(`${baseURL}`);
  };

  useEffect(() => {
    fetchAvgSalary().then((salaries) => setAvgSalary(salaries));
  }, []);

  return { maxSalaryByJob, avgSalary };
};
