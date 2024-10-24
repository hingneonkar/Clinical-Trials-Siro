// DemographicsChart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchDemographics } from '../redux/actions/analyticsActions';
import PieChartComponent from '../Charts/PieChartComponent';

const DemographicsChart = () => {
  const demographics = useSelector(state => state.demographics);

  return (
    <PieChartComponent 
      title="Participant Demographics" 
      description="Sex and age distribution of participants in clinical trials."
      fetchDataAction={fetchDemographics}
      dataKey="count"
      data={demographics}
    />
  );
};

export default DemographicsChart;
