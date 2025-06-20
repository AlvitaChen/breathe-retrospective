import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import { jobData } from './jobData';
import { aqiData } from './aqiData';

const getAqiLabel = (aqi) => {
  if (aqi <= 1) return '🌿 Good';
  if (aqi <= 2) return '🌤️ Fair';
  if (aqi <= 3) return '😐 Moderate';
  if (aqi <= 4) return '🌀 Poor';
  return '☠️ Very Poor';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const aqi = payload.find(p => p.dataKey === 'aqi')?.value;
    const jobs = payload.find(p => p.dataKey === 'jobs')?.value;
    return (
      <div style={{ background: 'white', border: '1px solid #ccc', padding: '10px' }}>
        <strong>{label}</strong><br />
        AQI: {aqi} — {getAqiLabel(aqi)}<br />
        PM Jobs: {jobs}
      </div>
    );
  }
  return null;
};

const emojiTicks = {
  1: '🌿',
  2: '🌤️',
  3: '😐',
  4: '🌀',
  5: '☠️'
};

const emojiFormatter = (value) => emojiTicks[value] || value;

const CityChart = ({ city }) => {
  const labels = [
    'Mon\n16',
    'Tue\n17',
    'Wed\n18',
    'Thu\n19',
    'Fri\n20'
  ];
  const jobs = jobData[city];
  const aqi = aqiData[city];

  const combinedData = labels.map((day, index) => ({
    day,
    aqi: aqi[index],
    jobs: jobs[index]
  }));

  return (
    <div className="city-chart-container">
      <h3>{city} — Job vs Air Quality</h3>
      <ResponsiveContainer height={300}>
        <LineChart data={combinedData} margin={{ top: 20, right: 60, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} interval={0} />
          <YAxis
            yAxisId="left"
            domain={[1, 5]}
            tickCount={5}
            tickFormatter={emojiFormatter}
          />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="aqi" stroke="#f50057" name="AQI" strokeWidth={2} />
          <Line yAxisId="right" type="monotone" dataKey="jobs" stroke="#2979ff" name="PM Jobs" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CityChart;