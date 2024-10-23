import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { fetchOfficials } from '../redux/actions/analyticsActions';

const OfficialsTable = () => {
  const dispatch = useDispatch();
  const { data, totalDocs, loading } = useSelector((state) => state.officials);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  useEffect(() => {
    dispatch(fetchOfficials(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

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
    <Table
      columns={columns}
      dataSource={data}
      rowKey="_id"
      loading={loading}
      pagination={{
        current: currentPage,
        pageSize,
        total: totalDocs,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50'],
      }}
      onChange={handleTableChange}
    />
  );
};

export default OfficialsTable;
