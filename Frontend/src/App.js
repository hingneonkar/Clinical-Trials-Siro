import logo from './logo.svg';
import './App.css';
import DemographicsChart from './components/DemographicsChart';
import LocationChart from './components/LocationChart';
import TrialsPerCityChart from './components/TrialsPerCityChart';
import OfficialsTable from './components/OfficialsTable';




function App() {
  return (
    <div className="App">
    <h1>Dashboard</h1>
    <div className="chart-grid">
      <LocationChart />
      <DemographicsChart />
      <TrialsPerCityChart />
    </div>
    <>
    <h1> Officials List (Bonus)</h1>
    <OfficialsTable/>
    </>
  </div>
  );
}

export default App;
