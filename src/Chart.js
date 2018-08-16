import React, { Component } from 'react';
import ChartJs from 'chart.js';
import moment from 'moment';

class Chart extends Component {
	constructor(props) {
		super(props);
		console.log(props.data);
	}

	componentDidMount() {
		let ctx = document.getElementById("myChart");
		console.table(this.defineData('pres'));
		new ChartJs(ctx, {
			type: 'line',
			data: {
				datasets: [{
					data: this.defineData('pres'),
				}],
				options: {
					bounds: 'ticks',
				}
			},
		})
	}

	defineData(label) {
		return Object.values(this.props.data[label]).map((value, idx) => {
			return {
				y: value,
				x: moment(this.props.data.time[idx]).format('h:mm:ss a'),
			}
		});
	}

	defineLabels() {
		return Object.values(this.props.data.time).map(t => {
			console.log(moment.unix(t).format('HH'));
			return moment.unix(t).format('HH')
		});
	}

	render() {
		return (
			<canvas id="myChart" width="400" height="400" />
		)
	}
}

export default Chart;