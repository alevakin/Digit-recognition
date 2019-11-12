var chart = tui.chart;
var container = document.getElementById('chartArea');
var rawData = {
    categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    series: [
        {
            name: 'Probability',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
};
var options = {
    chart: {
        width: 600,
        height: 280,
        title: 'Predicted Number'
    },
    xAxis: {
        min: 0,
        max: 100,
    },
    legend: {
        visible: false
    }
};
var theme = {
    series: {
        colors: [
            '#4ecaf4'
        ]
    }
};

chart.registerTheme('myTheme', theme);
options.theme = 'myTheme';

var barChart = chart.barChart(container, rawData, options);