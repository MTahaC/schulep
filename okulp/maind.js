//? diagramm start
var barColors = ["#000080", "#000080", "#000080", "#008040"];
var ctx = document.getElementById('myChart').getContext('2d');
var hs =  sessionStorage.getItem("berechnung")
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Schule 1', 'Schule 2', 'Schule 3', 'Schulzentrum 4'],
        datasets: [{
            label: '',
            data: [50000, 100000, 200000, hs],
            backgroundColor: barColors,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateChartValue(_index, value) {
    var data = chart.data.datasets[0].data;
    var lastIndex = data.length - 1;
    data[lastIndex] = value;
    chart.update();
}

var updateButton = document.getElementById('updateButton');
updateButton.addEventListener('click', function () {
    var input = document.getElementById('inputValue');
    //! önemli
    var inputValue = sessionStorage.getItem("berechnung");
    //! önemli
    
    updateChartValue(chart.data.labels.legth - 1, inputValue);
});


//? diagramm end