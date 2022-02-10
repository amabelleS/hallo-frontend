import React from 'react';
import { useFetchApiForTable } from '../../hooks/useFetchApiForTable';

const Table = () => {
  const { avgSalary } = useFetchApiForTable();
  console.log('🚀 ~ file: table.js ~ line 6 ~ Table ~ avgSalary', avgSalary);
  return <div>table</div>;
};

export default Table;
