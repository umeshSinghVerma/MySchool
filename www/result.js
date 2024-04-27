const init = function (e) {
    // Fake data for demonstration
    var fakeData = "0.8, 0.6, 0.7, 0.9, 1, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 0.3, 0.2, 0.5, 0.6, 0.4, 0.7, 0.8, 0.6, 0.5, 0.9, 1, 0.7, 0.4, 0.3, 0.6, 0.8, 0.9, 0.7, 0.5, 0.6, 0.8, 0.9, 0.7, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9";
    var fakeDataArray = fakeData.split(",");
    var n = fakeDataArray.length;
    var datapoints = [];
    for (var i = 0; i < n; i++) {
        datapoints.push({
            y: Number(fakeDataArray[i])
        });
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Attention Span"
        },
        axisY: {
            includeZero: false,
            title: "Attention Status"
        },
        axisX: {
            title: "Time in Deciseconds"
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: datapoints
        }]
    });
    chart.render();

}

document.addEventListener('DOMContentLoaded', function () {
    init();
});
