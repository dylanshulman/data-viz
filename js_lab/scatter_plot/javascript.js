
var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, 
              {
                data: [
                {x: 68.3, y: 5878}, 
                ], 
                label: "Indonesia", 
                borderColor: "rgb(255,51,5)",
                backgroundColor: "rgb(255,51,5,0.1)",
                borderWidth: 2,
              }, 
              {
                data: [
                {x: 71.9, y: 11461}, 
                ], 
                label: "Brazil", 
                borderColor: "rgb(205,5,255)",
                backgroundColor: "rgb(205,5,255,0.1)",
                borderWidth: 2,
              },
            ]
          },
          options: {
            responsive: true,
       plugins: {       
            //Chart title
           title: {
               display: true,
               text: 'Life expectancy and GDP of the five most populous countries',
               font: {
                   size: 18
               }
           },
           //Chart subtitle
           subtitle: {
               display: true,
               text: 'The United States leads in both categories while India trails in both.'
           }
       },

            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Gross Domestic Product (GDP) per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Average Life Expectancy'
                  }
              }
            }
          }
        });
