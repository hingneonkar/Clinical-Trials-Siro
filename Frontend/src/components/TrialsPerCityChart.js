import React from 'react';
import { useSelector } from 'react-redux';
import { fetchTrialsPerCity } from '../redux/actions/analyticsActions';
import BarChartComponent from '../Charts/BarChartComponent';

const TrialsPerCityChart = () => {
  const trialsPerCity = useSelector(state => state.trialsPerCity);

  return (
    <BarChartComponent 
      title="Trials per City/Facility" 
      description="Number of clinical trials conducted per city or facility."
      fetchDataAction={fetchTrialsPerCity}
      dataKey="_id"
      data={trialsPerCity}
    />
  );
};

export default TrialsPerCityChart;