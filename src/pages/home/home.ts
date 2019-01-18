import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  index = 'IndexPage'
  my = 'MyPage'
  constructor(public navCtrl: NavController) {

  }
}
