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
  menu = true;

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

  mudarCor(event: any){
    const checkbox = event.target;
    const main = document.querySelector('main') as HTMLElement;
    if (checkbox.checked) {
      main.style.backgroundColor = '#262626';
    } else {
      main.style.backgroundColor = '#FBF7F4';
    }
  }


  ngOnInit() {
    // Criar uma instância de gráfico com os padrões
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

  abrirMenu(){
    this.menu = true;
  }

  fecharMenu(){
    this.menu = false;
  }
}
