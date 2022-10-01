import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IProjectNum } from 'src/app/modules/core/interfaces/projectInterface';

Chart.register(...registerables);

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

	chart: any;
	colors = [
		'rgba(255, 99, 132, 1)',
		'rgba(255, 159, 64, 1)',
		'rgba(255, 205, 86, 1)',
		'rgba(75, 192, 192, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(153, 102, 255, 1)',
		'rgba(201, 203, 207, 1)'
	]
	@Input() projectNumbers: Array<IProjectNum> = [];

	constructor() { }

	ngOnInit(): void {
		this.createChart();
	}

	itemBar = (project: IProjectNum) => {
		const color = this.colors[this.projectNumbers.indexOf(project)];
		return {
			label: `${project.name}: ${(project.completed / project.total) * 100}%`,
			data: [project.completed, project.total],
			backgroundColor: [
				color
			],
			borderColor: [
				color
			],
			borderWidth: 1,
			borderRadius: 10,
			barPercentage: 0.5
		}
	};

	createChart(): any {
		this.chart = new Chart('barChart', {
			type: 'bar',
			data: {
				labels: ['Project'],
				datasets: this.projectNumbers.map(project => this.itemBar(project))
			},
			options: {
				indexAxis: 'y',
				elements: {
					bar: {
						borderRadius: 10,
						borderSkipped: 'middle'
					}
				},
				plugins: {
					tooltip: {
						callbacks: {
							title: (context) => {
								return `${context[0].dataset.label}: `;
							},
							label: (context) => {
								return `  ${context.dataset.data[0]} stories completed of ${context.dataset.data[1]}`;
							}
						}
					},
					legend: {
						display: true,
						fullSize: true,
						labels: {
							usePointStyle: true,
							pointStyle: 'rectRounded',
							font: {
								size: 15
							}
						},
						title: {
							color: 'rgba(167, 176, 50, 1)'
						}
					}
				},
				scales: {
					x: {
						stacked: true,
						grid: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: false
						}
					},
					y: {
						beginAtZero: true,
						stacked: true,
						grid: {
							display: false,
							drawBorder: false,
							drawTicks: false
						},
						ticks: {
							display: false
						}
					}
				}
			}
		})
	};
}
