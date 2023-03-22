import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DashboardIniciacao';

  ex = false;
  modo = true;

  apexDefaults = {
    chart: {
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    }
  };

  chart: ApexCharts | undefined;

  mudarCor(){
    const main = document.querySelector('main') as HTMLElement;
    if (this.modo == false) {
      main.style.backgroundColor = '#000000';
    } else {
      main.style.backgroundColor = '#F5F5F9';
    }
  }


  ngOnInit() {
    this.chart = new ApexCharts(document.querySelector('#chart'), {
      ...this.apexDefaults,
      series: [{
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    });

    this.chart.render();
  }

  expandir(){
    this.ex = true;
  }

  fechar(){
    this.ex = false;
  }

  modoNoturno(){
    this.modo = false;
  }

  modoDiurno(){
    this.modo = true;
  }

}
