import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './PopulationData.css';

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        console.log("data",response);
        const data = await response.json();
        setPopulationData(data.data);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchPopulationData();
  }, []);

  const years = populationData.map(item => String(item.Year));
  const populations = populationData.map(item => item.Population);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Population',
        data: populations,
        fill: false,
        borderColor: 'green',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Population',
        },
      },
    },
  };

  return (
    <div className="population-graph">
      <h2>Population Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PopulationGraph;
