// OfficialsTable.js
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchOfficials } from '../redux/actions/analyticsActions';
import DataTableComponent from '../Charts/DataTableComponent';

const OfficialsTable = () => {
  const { data, totalDocs, loading } = useSelector((state) => state.officials);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Affiliation',
      dataIndex: 'affiliation',
      key: 'affiliation',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Facility',
      dataIndex: 'facility',
      key: 'facility',
    },
  ];

  return (
    <DataTableComponent 
      // title="Officials List"
      fetchDataAction={fetchOfficials}
      data={data}
      totalDocs={totalDocs}
      loading={loading}
      columns={columns}
    />
  );
};

export default OfficialsTable;
