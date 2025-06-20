import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell
} from 'recharts';

const connectionData = [
  { city: 'Jakarta', value: 4 },
  { city: 'KualaLumpur', value: 3 },
  { city: 'Singapore', value: 3 },
  { city: 'Taipei', value: 3 },
  { city: 'HongKong', value: 2 },
  { city: 'Bangkok', value: 2 },
  { city: 'Manila', value: 1 },
  { city: 'Dubai', value: 1 }
];

const levelLabels = {
  1: '🌱 Open to building',
  2: '😊 Acquaintances',
  3: '💛 Friends nearby',
  4: '❤️‍🔥 Deep roots'
};

const emojiLabels = {
  1: '🌱',
  2: '😊',
  3: '💛',
  4: '❤️‍🔥'
};

const getEmoji = (value) => emojiLabels[value] || '';
const getLabel = (value) => levelLabels[value] || '';

const cityColors = {
  Jakarta: '#d8b4fe',
  KualaLumpur: '#a5f3fc',
  Singapore: '#a5f3fc',
  Taipei: '#a5f3fc',
  HongKong: '#fde68a',
  Bangkok: '#fde68a',
  Manila: '#f9a8d4',
  Dubai: '#f9a8d4'
};

// Custom Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const city = payload[0].payload.city;
    return (
      <div style={{ background: 'white', border: '1px solid #ccc', padding: 10, borderRadius: 6 }}>
        <strong>{city}</strong>
        <div>{levelLabels[value]}</div>
      </div>
    );
  }
  return null;
};

const SocialConnectionChart = () => {
  return (
    <div className="city-chart-container social-connection">
      <h3>🌍 Social Connection by City</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={connectionData}
          margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0.5, 4]}
            ticks={[1, 2, 3, 4]}
            tickFormatter={(value) => `${getEmoji(value)} ${value}`}
          />
          <YAxis dataKey="city" type="category" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" barSize={28}>
            {connectionData.map((entry) => (
              <Cell key={entry.city} fill={cityColors[entry.city]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SocialConnectionChart;