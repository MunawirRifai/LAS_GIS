var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Bandung Wetan', 'Cibeunying Kaler', 'Coblong', 'Sumur Bandung', 'Bojongloa Kidul', 'Regol'],
        datasets: [{
            label: '# Jumlah Museum di Setiap Daerah Bandung Kota',
            data: [5, 3, 4, 2, 1, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Atur agar responsif penuh
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
