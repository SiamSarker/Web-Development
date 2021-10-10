var xValues = [1, 2, 3, 4, 5];
var yValues = [3, 4, 5, 10, 5];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
        yAxes: [{ticks: {min: 0, max:10}}],
    }
  }
});
