import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
    useEffect(() => {
        const colors = ['#008FFB']; // Replace with your colors

        const options = {
            series: [{ data: [21, 22, 10, 28, 16, 21, 13, 30] }],
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart: any, w: any, e: any) {
                        // console.log(chart, w, e)
                    },
                },
            },
            colors: colors,
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                categories: [
                    ['John', 'Doe'],
                    ['Joe', 'Smith'],
                    ['Jake', 'Williams'],
                    'Amber',
                    ['Peter', 'Brown'],
                    ['Mary', 'Evans'],
                    ['David', 'Wilson'],
                    ['Lily', 'Roberts'],
                ],
                labels: {
                    style: {
                        colors: colors,
                        fontSize: '12px',
                    },
                },
            },
        };

        const chartContainer = document.querySelector('#chart') as HTMLElement; // Type assertion

        const chart = new ApexCharts(chartContainer, options);
        chart.render();


        return undefined;
    }, []); // The empty dependency array ensures the useEffect runs only once, equivalent to componentDidMount

    return <div id="chart" />;
};

export default BarChart;
