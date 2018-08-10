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
  public courses = [{name: "Mechanical", id: 1, imgSrc: "../../assets/img/sub_mech.jpg"},{name: 'Electronics', id: 2, imgSrc: "../../assets/img/sub_ece.jpg"},{name: "Computer Science", id: 3, imgSrc: "../../assets/img/sub_cse.jpeg"},{name: "Electrical Engineering", id: 4, imgSrc: "../../assets/img/sub_ee.jpg"}];
  public rows = Array.from(Array(Math.ceil(this.courses.length / 3)).keys())
  
  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  viewSubjects(page){
    console.log("view sub");
    //space for calling a service to fetch the subjectes of selected specialisation
    this.nav.push(SubjectPage);
  }

}
