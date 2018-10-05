import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  ciencias = CienciaPage;
  dibujo = DibujoPage;
  com = ComPage;
  mi = MiPage;
  pye = PyePage;
  papps = PappsPage;
  rob = RoboticaPage;

  constructor(public navCtrl: NavController) {

  }

  clickHistoria()
  {
    this.navCtrl.push(this.historia);
  }

  clickCiencias()
  {
   this.navCtrl.push(this.ciencias);
  }

  clickDibujo()
  {
    this.navCtrl.push(this.dibujo);
  }

  clickCom()
  {
    this.navCtrl.push(this.com);
  }

  clickMi()
  {
    this.navCtrl.push(this.mi);
  }

  clickPye()
  {
    this.navCtrl.push(this.pye);
  }

  clickPapps()
  {
    this.navCtrl.push(this.papps);
  }

  clickRob()
  {
    this.navCtrl.push(this.rob);
  }
}
