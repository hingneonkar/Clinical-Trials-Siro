import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartComponent = ({ title, description, fetchDataAction, dataKey, data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch, fetchDataAction]);

  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey="_id"
            cx="50%"
            cy="50%"
            outerRadius={150}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
