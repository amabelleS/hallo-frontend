import { useState, useEffect } from 'react';

export const useFetchApiForTable = () => {
  const [maxSalaryByJob, setMaxSalaryByJob] = useState([]);
  const [avgSalary, setAvgSalary] = useState([]);
  const [jobs, setJobes] = useState([]);

  const baseURL = 'http://localhost:8080/salary/';

  const fetchAvgSalary = async () => {
    try {
      const response = await fetch(`${baseURL}avg`);
      const data = await response.json();
      const fetchedJobs = data.map((job) => job.job);
      setJobes(fetchedJobs);
      console.log(
        '🚀 ~ file: useFetchApiForTable.js ~ line 20 ~ fetchAvgSalary ~ fetchedJobs',
        fetchedJobs
      );
      return data;
    } catch (error) {}
  };

  const fetchMaxSalaryByJob = async () => {
    try {
      const maxJobs = await Promise.all(
        jobs.map(async (job) => {
          const fetchedJobs = await fetch(`${baseURL}${job}`);
          return fetchedJobs.json();
        })
      );
      //   const fetchedMaxJobs = maxJobs
      //     .filter((p) => p.status === 'fulfilled')
      //     .map((job) => job.value.data.results[0]);

      return maxJobs;
    } catch (error) {
      throw Error(error);
    }
  };

  useEffect(() => {
    fetchAvgSalary().then((salaries) => setAvgSalary(salaries));
  }, []);

  useEffect(() => {
    fetchMaxSalaryByJob().then((maxJobs) => setMaxSalaryByJob(maxJobs));
  }, [avgSalary]);

  return { maxSalaryByJob, avgSalary };
};
