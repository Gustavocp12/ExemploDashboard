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
      type: 'area',
      width: 400,
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
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        }
      }
    },
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
    this.chart = new ApexCharts(document.querySelector("#chart"), {
      ...this.apexDefaults,
      series: [
        {
          name: "Series 1",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
      title: {
        text: "Imóveis trabalhados com notificação",
        align: "center",
        style: {
          fontSize: "18px",
          fontWeight: "bold",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
    });
    this.chart.render();

    this.chart = new ApexCharts(document.querySelector('#chart2'), {
      ...this.apexDefaults,
      chart: {
        type: 'bar',
        width: 400,
      },
      series: [{
        name: 'Series 1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      title: {
        text: 'Imóveis trabalhados',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold'
        },

      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 1
        }
      },
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
