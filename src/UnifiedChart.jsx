import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { city: 'Jakarta', aqi: 5, jobs: 227 },
  { city: 'Kuala Lumpur', aqi: 5, jobs: 48 },
  { city: 'Singapore', aqi: 2, jobs: 920 },
  { city: 'Taipei', aqi: 5, jobs: 115 },
  { city: 'Hong Kong', aqi: 3, jobs: 276 },
  { city: 'Bangkok', aqi: 4, jobs: 448 },
  { city: 'Manila', aqi: 5, jobs: 115 },
  { city: 'Dubai', aqi: 4, jobs: 455 }
];

const getAqiLabel = (aqi) => {
  if (aqi <= 1) return '🌿 Good';
  if (aqi <= 2) return '🌤️ Fair';
  if (aqi <= 3) return '😐 Moderate';
  if (aqi <= 4) return '🌀 Poor';
  return '☠️ Very Poor';
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const aqi = payload.find(p => p.dataKey === 'aqi')?.value;
    const jobs = payload.find(p => p.dataKey === 'jobs')?.value;
    return (
      <div style={{ background: 'white', border: '1px solid #ccc', padding: '10px' }}>
        <strong>{payload[0].payload.city}</strong><br />
        AQI: {aqi} — {getAqiLabel(aqi)}<br />
        PM Jobs: {jobs}
      </div>
    );
  }
  return null;
};

const UnifiedChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 60, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis yAxisId="left" domain={[1, 5]} tickCount={5} />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="aqi" stroke="#4CAF50" name="AQI" strokeWidth={2} />
          <Line yAxisId="right" type="monotone" dataKey="jobs" stroke="#2196F3" name="PM Jobs" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UnifiedChart;