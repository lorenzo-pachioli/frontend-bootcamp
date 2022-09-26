import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
	selector: 'app-doughnut-chart',
	templateUrl: './doughnut-chart.component.html',
	styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

	chart: any;
	labels = [];
	data = [];
	@Input() items = [];
	@Input() subItems = [];
	constructor() { }

	ngOnInit(): void {
		this.labels = this.items.map(item => item.name);
		this.data = this.items.map(item => {
			return this.subItems.filter(subitem => subitem.project === item.id.toString()).length;
		});

		this.createChart();
	}

	/* labelClicked(event, legendItem, legend): void {
		console.log('event:', event, 'legendItem:', legendItem, 'legend:', legend)
	} */

	createChart(): any {
		this.chart = new Chart('MyChart', {
			type: 'doughnut',
			data: {
				labels: this.labels,
				datasets: [{
					label: 'My ',
					data: this.data,
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(255, 159, 64, 1)',
						'rgba(255, 205, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(201, 203, 207, 1)'
					],
					hoverOffset: 4,
					borderRadius: 20,
					spacing: 10
				}]
			},
			options: {
				cutout: '70%',
				plugins: {
					tooltip: {
						callbacks: {
							label: (context) => {
								return ` ${context.label}: ${context.raw} epic`;
							}
						}
					},
					legend: {
						display: true,
						position: 'bottom',
						maxWidth: 150,
						/* onClick: (event, legendItem, legend) => this.labelClicked(event, legendItem, legend), */
						labels: {
							usePointStyle: true,
							pointStyle: 'rectRounded',
							font: {
								size: 20
							}
						},
						title: {
							color: 'rgba(167, 176, 50, 1)'
						}
					}
				}
			}
		})
	};

}

