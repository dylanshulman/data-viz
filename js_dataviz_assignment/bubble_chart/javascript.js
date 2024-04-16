//BUBBLE CHART SCRIPT

        var ctxRadar = document.getElementById('myBubbleChart').getContext('2d');
        var myChart = new Chart(ctxRadar, {
            type: 'bubble',
            data: {
              datasets: [{
                label: 'Dua Lipa\'s Top 5 Streamed Songs',
                data: [
            {x: 27119, y: 532, r: 2303033973 / 100000000, label: 'Don\'t Start Now'},
            {x: 27705, y: 537, r: 1897517891 / 100000000, label: 'One Kiss (with Dua Lipa) by Calvin Harris'},
            {x: 15894, y: 198, r: 1802514301 / 100000000, label: 'Levitating (feat. DaBaby)'},
            {x: 21097, y: 384, r: 1605224506 / 100000000, label: 'Cold Heart - PNAU Remix'},
            {x: 7370, y: 92, r: 956865266 / 100000000, label: 'No Lie by Sean Paul'}
          ]
              },
              {
                label: 'Billie Eilish\'s Top 5 Streamed Songs',
                data: [
            {x: 15032, y: 221, r: 2355719893 / 100000000, label: 'lovely - Bonus Track'},
            {x: 8476, y: 138, r: 1056760045 / 100000000, label: 'Happier Than Ever'},
            {x: 4204, y: 39, r: 777765388 / 100000000, label: 'Bored'},
            {x: 1959, y: 19, r: 412795151 / 100000000, label: 'Happier Than Ever - Edit'},
            {x: 3009, y: 68, r: 338564981 / 100000000, label: 'TV'}
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
                tooltip: {
                  enabled: true,
                  callbacks: {
                    label: function(context) {
                      const label = context.dataset.label || '';
                      const dataPoint = context.raw;
                      const x = dataPoint.x;
                      const y = dataPoint.y;
                      const r = dataPoint.r;
                      return `${label}: (X: ${x}, Y: ${y}, R: ${r})`;
                }
            }
        },
              title: {
                display: true,
                text: 'Top Streamed Songs by Dua Lipa and Billie Eilish'
              },
            subtitle: {
                display: true,
                text: 'Both pop superstars will release albums in May. Will Eilish\'s new project put her ahead of Lipa? Bubble size represents track streams.'
            },
              elements: {
                line: {
                  borderWidth: 3
                }
              }
            }
          }
          });
