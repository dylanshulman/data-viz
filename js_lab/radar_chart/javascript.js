var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Paid Work',
              'Education',
              'Care for household members',
              'Housework',
              'Shopping',
              'Other unpaid work',
              'Sleep',
              'Eating and drinking',
              'Personal Care'
            ],
            datasets: [{
              label: 'Time Use',
              data: [315, 25, 23, 103, 20, 33, 542, 100, 52],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(155, 227, 125)',
                'rgb(54, 162, 235)',
                'rgb(201, 203, 207)',
                'rgb(150, 68, 119)',
                'rgb(109, 91, 171)',
                'rgb(237, 24, 38)'
              ]
       