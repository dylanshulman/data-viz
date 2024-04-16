//RADAR CHART SCRIPT

        var ctxRadar = document.getElementById('myRadarChart').getContext('2d');
        var myChart = new Chart(ctxRadar, {
            type: 'radar',
            data: {
              labels: [
                'Danceability',
                'Valence',
                'Energy',
                'Acousticness',
                'Instrumentalness',
                'Liveness',
                'Speechiness'
              ],
              datasets: [{
                label: 'Houdini',
                data: [74.4, 86.6, 78.9, 0.36, 0.144, 9.47, 5.9],
                fill: true,
                backgroundColor: 'rgba(253,204,8, 0.2)',
                borderColor: 'rgb(253,204,8)',
                pointBackgroundColor: 'rgb(253,204,8)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(253,204,8)'
              },
              {
                label: 'Training Season',
                data: [81.5, 67.1, 67.1, 3.65, 0.000145, 13.8, 5.32],
                fill: true,
                backgroundColor: 'rgba(124,11,11, 0.2)',
                borderColor: 'rgb(124,11,11)',
                pointBackgroundColor: 'rgb(124,11,11)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(124,11,11)'
              },
              {
                label: 'Illusion',
                data: [67.9, 70.9, 77.2, 2.77, 0.000259, 10.6, 4.72],
                fill: true,
                backgroundColor: 'rgba(4,59,155, 0.2)',
                borderColor: 'rgb(4,59,155)',
                pointBackgroundColor: 'rgb(4,59,155)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(4,59,155)'
              }]
            },
            options: {
              responsive: true,
              plugins: {
              title: {
                display: true,
                text: 'Audio features of Dua Lipa\'s latest singles'
              },
            subtitle: {
                display: true,
                text: 'With \"Optimism\" dropping at the beginning of May, Dua Lipa\'s last three singles give us a hint at what the new album will sound like.'
            },
              elements: {
                line: {
                  borderWidth: 3
                }
              }
            }
          }
          });
