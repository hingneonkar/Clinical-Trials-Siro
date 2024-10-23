import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../redux/actions/analyticsActions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  ResponsiveContainer } from 'recharts';

const LocationChart = () => {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.locations);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <div className="chart-container">
    <h3>Clinical Trial Locations</h3>
    <p>Distribution of clinical trial facilities by country.</p>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={locations}>
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

export default LocationChart;
