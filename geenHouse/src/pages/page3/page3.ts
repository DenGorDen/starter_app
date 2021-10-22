import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page5Page } from '../page5/page5';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage5(params){
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }
}
