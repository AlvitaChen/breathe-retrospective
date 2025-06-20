import './App.css';
import CityChart from './CityChart';
import MultiCityAqiChart from './MultiCityAqiChart';
import MultiCityJobChart from './MultiCityJobChart.jsx';
import SocialConnectionChart from './SocialConnectionChart';

const cities = [
  'Jakarta',
  'KualaLumpur',
  'Singapore',
  'Taipei',
  'HongKong',
  'Bangkok',
  'Manila',
  'Dubai'
];

function App() {
  return (
    <div className="app">
      <h1>Air Quality Report</h1>
      <h2>Emotional & Environmental</h2>
      <p>A five-day retrospective on clarity, chaos, and career applications.<br />
      Covering June 16 – 20, 2025.</p>

      <MultiCityAqiChart />
      <MultiCityJobChart />
      <SocialConnectionChart />

      {cities.map((city) => (
        <CityChart key={city} city={city} />
      ))}
    </div>
  );
}

export default App;