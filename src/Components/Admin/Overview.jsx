import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';

Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

// Define a color palette for lines
const colorPalette = [
    '#F2613F', // Primary color
    '#4CAF50', // Secondary color
    '#2196F3', // Tertiary color
    '#FFC107', // Accent color
    '#FF5722'  // Additional color
];

// Styled component for chart container
const OverviewWrapper = styled.div`
    background-color: #1F1F1F;
    padding: 20px;
    border-radius: 8px;
    color: #F2613F;
    width: 45%;
    margin-right: 15px;
`;

const Overview = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
      
        const endpoints = [
            'http://localhost:8080/active-sportsusers',
            'http://localhost:8080/active-musicusers',
            'http://localhost:8080/active-liteusers',
            'http://localhost:8080/active-codingusers',
            'http://localhost:8080/active-artsusers',
           
            
        ];

      
        Promise.all(endpoints.map(url => axios.get(url)))
            .then(responses => {
                const labels = responses[0].data.labels;
                const datasets = responses.map((response, index) => ({
                    label: `Club ${index + 1}`,
                    data: response.data.data, 
                    borderColor: colorPalette[index % colorPalette.length],
                    backgroundColor: colorPalette[index % colorPalette.length] + '80', 
                    borderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    lineTension: 0.3, 
                }));

                setChartData({
                    labels: labels,
                    datasets: datasets
                });
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);

    return (
        <OverviewWrapper>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.dataset.label}: ${context.raw}`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)' // Subtle grid color
                            }
                        }
                    }
                }}
            />
        </OverviewWrapper>
    );
}

export default Overview;
