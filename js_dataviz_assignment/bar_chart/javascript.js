
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Don\'t Start Now', 'One Kiss by Calvin Harris', 'Levitating (feat. DaBaby)', 'Cold Heart - PNAU Remix', 'No Lie by Sean Paul'],
        datasets: [{
            label: 'Streams',
            data: [2303033973, 1897517891, 1802514301, 1605224506, 956865266],
            backgroundColor: [
                '#8c1ddb'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
              },
            title: {
                display: true,
                text: 'Dua Lipa\'s Top Streamed Songs as of 2023',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Dua Lipa\'s top five tracks collectively earned over 8.5 billion streams. \"Don\'t Start Now\" was the 20th most streamed song on Spotify.',
                padding: {
                    bottom: 20,
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Streams'
                }
            }
        },
    },
});
