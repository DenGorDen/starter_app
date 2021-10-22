import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';
import { Page4Page } from '../page4/page4';
import { Page5Page } from '../page5/page5';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = Page2Page;
  tab2Root: any = Page3Page;
  tab3Root: any = Page4Page;
  tab4Root: any = Page5Page;
  constructor(public navCtrl: NavController) {
  }
  
}
