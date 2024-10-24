import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChartComponent = ({ title, description, fetchDataAction, dataKey, data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch, fetchDataAction]);

  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
