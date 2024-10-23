import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDemographics } from '../redux/actions/analyticsActions';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, label  } from 'recharts';

const DemographicsChart = () => {
  const dispatch = useDispatch();
  const demographics = useSelector(state => state.demographics);

  useEffect(() => {
    dispatch(fetchDemographics());
  }, [dispatch]);

  const COLORS = [ '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="chart-container">
      <h3>Participant Demographics</h3>
      <p>Sex and age distribution of participants in clinical trials.</p>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={demographics}
            dataKey="count"
            nameKey="_id"
            cx="50%"
            cy="50%"
            outerRadius={150}
            // fill="#8884d8"
          >
            {demographics.map((entry, index) => (
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

export default DemographicsChart;
