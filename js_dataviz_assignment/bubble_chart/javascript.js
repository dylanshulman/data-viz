//BUBBLE CHART SCRIPT

        var ctxRadar = document.getElementById('myBubbleChart').getContext('2d');
        var myChart = new Chart(ctxRadar, {
            type: 'bubble',
            data: {
              datasets: [{
                label: 'Dua Lipa\'s Top 5 Streamed Songs',
                data: [
            {x: 27119, y: 532, r: 2303033973 / 100000000},
            {x: 27705, y: 537, r: 1897517891 / 100000000},
            {x: 15894, y: 198, r: 1802514301 / 100000000},
            {x: 21097, y: 384, r: 1605224506 / 100000000},
            {x: 7370, y: 92, r: 956865266 / 100000000}
          ]
              },
              {
                label: 'Billie Eilish\'s Top 5 Streamed Songs',
                data: [
            {x: 15032, y: 221, r: 2355719893 / 100000000},
            {x: 8476, y: 138, r: 1056760045 / 100000000},
            {x: 4204, y: 39, r: 777765388 / 100000000},
            {x: 1959, y: 19, r: 412795151 / 100000000},
            {x: 3009, y: 68, r: 338564981 / 100000000}
          ]
              }]
            },
            options: {
              scales: {
            y: {
                beginAtZero: false,
                title: {
                  display: true,
                  text: '# of Apple Music playlists with track'
                }
            },
            x: {
                beginAtZero: false,
                title: {
                  display: true,
                  text: '# of Spotify playlists with track'
                }
            }
        },
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
