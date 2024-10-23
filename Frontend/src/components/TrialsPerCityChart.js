import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrialsPerCity } from '../redux/actions/analyticsActions';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TrialsPerCityChart = () => {
  const dispatch = useDispatch();
  const trialsPerCity = useSelector(state => state.trialsPerCity);

  useEffect(() => {
    dispatch(fetchTrialsPerCity());
  }, [dispatch]);

  return (
    <div className="chart-container">
    <h3>Trials per City/Facility</h3>
    <p>Number of clinical trials conducted per city or facility.</p>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={trialsPerCity}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default TrialsPerCityChart;
