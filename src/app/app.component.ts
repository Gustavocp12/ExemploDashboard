import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashboardIniciacao';

  ex = false;
  menu = true;

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


