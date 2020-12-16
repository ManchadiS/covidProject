import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from 'chart.js';

/**
 * Generated class for the AnalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analysis',
  templateUrl: 'analysis.html',
})
export class AnalysisPage {
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvas') pieCanvas;

  lineChart: any;
  pieChart: any;
  graphs = "line";
  staticData = [{ key: 'Active Cases', val: '2650' },
  { key: 'Cured / Discharged', val: '183' },
  { key: 'Deaths', val: '68' },
  { key: 'Migrant', val: '1' }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalysisPage');
    this.drawLineChart();
  }

  drawLineChart() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: this.graphs == 'line' ? 'line' : 'bar',
      data: {
        labels: ['Active Cases', 'Cured / Discharged', 'Deaths', 'Migrant'],
        datasets: [
          {
            label: 'COVID-19 REPORT',
            fill: false,
            lineTension: 0.08,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [2650, 1831, 681, 1],
            spanGaps: false,
          }
        ]
      }
    });
  }

  drawPieChart() {
    console.log('hi')
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ['Active Cases', 'Cured / Discharged', 'Deaths', 'Migrant'],
        datasets: [
          {
            label: "COVID-19 REPORT",
            data: [2650, 1831, 681, 1],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
  }

  graphToggled() {
    console.log(this.graphs);
    if (this.graphs == 'pie') {
      this.drawPieChart();
    } else {
      this.drawLineChart();
    }
  }

}
