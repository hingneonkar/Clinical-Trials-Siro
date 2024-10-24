import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';

const DataTableComponent = ({ title, fetchDataAction, data, totalDocs, loading, columns }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  useEffect(() => {
    dispatch(fetchDataAction(currentPage, pageSize));
  }, [dispatch, fetchDataAction, currentPage, pageSize]);

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <Table
      title={() => <h3>{title}</h3>}
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

export default DataTableComponent;
