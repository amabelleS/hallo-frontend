import { useState, useEffect } from 'react';

export const useFetchPopularity = () => {
  const [jobsPopularity, setJobsPopularity] = useState([]);

  const baseURL = 'http://localhost:8080/salary/';

  const fetchPopularity = async () => {
    try {
      const response = await fetch(`${baseURL}popularity`);
      const data = await response.json();

      return data;
    } catch (error) {
      throw Error(error);
    }
  };

  useEffect(() => {
    fetchPopularity().then((salaries) => setJobsPopularity(salaries));
  }, []);

  return jobsPopularity;
};
