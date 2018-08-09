import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubjectPage} from "../subject/subject";
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  public slideData = [{ image: "../../assets/img/banner1.jpg" },{ image: "../../assets/img/banner2.jpg" },{ image: "../../assets/img/banner3.jpg" },{ image: "../../assets/img/banner4.jpg" }];

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  viewSubjects(page){
    console.log("view sub");
    this.nav.push(SubjectPage);
  }

}
