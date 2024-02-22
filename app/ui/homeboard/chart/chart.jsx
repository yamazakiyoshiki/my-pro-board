"use client"

import { countProblemCat } from '@/app/lib/actions';
import styles from './chart.module.css'
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const getWeekdaysStartingToday = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().getDay(); // 今日の曜日のインデックス (0-6)
  return [...weekdays.slice(today), ...weekdays.slice(0, today)];
};

const Chart =  () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const counts = await countProblemCat();
        const weekdays = getWeekdaysStartingToday();
        const chartData = weekdays.map(day => ({
          name: day,
          JavaScript: counts.JavaScript || 0,
          TypeScript: counts.TypeScript || 0,
          React: counts.React || 0,
          Vue: counts.Vue || 0,
          NextJs: counts.NextJs || 0,
          NuxtJs: counts.NuxtJs || 0,
        }));
        setData(chartData);
      } catch (err) {
        console.error("Failed fetching chartData!", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>今週のジャンルトレンド</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="JavaScript" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="TypeScript" stroke="#82ca9d" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="React" stroke="#cac382" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Vue" stroke="#ca8282" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="NextJs" stroke="#b282ca" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="NuxtJs" stroke="#ca9982" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;