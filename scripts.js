	var closeTheAlert = document.getElementById("close");
    var alertBar = document.getElementById("alert");

        closeTheAlert.addEventListener("click", function() {
            if (alertBar.style.display = "block") {
                alertBar.style.display = "none";
            }
        });







    var ctx = document.getElementById("myChart").getContext("2d");
    Chart.defaults.global.maintainAspectRatio = true;
    Chart.defaults.global.defaultFontColor = "rgba(75,192,192,1)";
	var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"],
    yLabels: ["100", "500", "1000", "2500", "3000", "3500", "4000" ],
    datasets: [
        {
            label: "Site Traffic",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(71, 209, 71, 0.5)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 6,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [120, 500, 310, 770, 400, 1200, 990],
            spanGaps: false,
        }
    ]
 },
 options: {
    title: {
        display: true,
        text: 'Site Traffic'
      },
    legend: {
        display: false,
    }  
 }
});



var ctx = document.getElementById("myChart2").getContext("2d");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ["Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat."],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 58, 60, 72],
        }
    ]
   },
   
   options: {
    title: {
        display: true,
        text: 'Daily Traffic'
      },
    legend: {
        display: false,
    }  
   } 
});



var ctx = document.getElementById("myChart3").getContext("2d");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [
        "Desktop",
        "Tablets",
        "Phones"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
  }
    
});


