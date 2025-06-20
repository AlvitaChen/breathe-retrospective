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

import { aqiData } from './aqiData';

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

const colors = [
  '#e91e63', '#2196f3', '#4caf50', '#ff9800',
  '#9c27b0', '#00bcd4', '#ff5722', '#795548'
];

const MultiCityAqiChart = () => {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const combinedData = labels.map((day, i) => {
    const entry = { day };
    cities.forEach((city) => {
      entry[city] = aqiData[city][i];
    });
    return entry;
  });

  const emojiMap = {
    1: '🌿',
    2: '🌤️',
    3: '😐',
    4: '🌀',
    5: '☠️'
  };

  return (
    <div className="city-chart-container">
      <h2>City Comparison — AQI</h2>
      <ResponsiveContainer height={300}>
        <LineChart
          data={combinedData}
          margin={{ top: 20, right: 60, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            yAxisId="left"
            domain={[5, 1]}
            ticks={[1, 2, 3, 4, 5]}
            tickFormatter={(value) => `${emojiMap[value] || ''} ${value}`}
          />
          <Tooltip />
          <Legend />
          {cities.map((city, idx) => (
            <Line
              key={city}
              yAxisId="left"
              type="monotone"
              dataKey={city}
              stroke={colors[idx % colors.length]}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiCityAqiChart;