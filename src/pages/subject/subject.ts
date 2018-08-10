import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VideoPage} from "../video/video";

/**
 * Generated class for the SubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject',
  templateUrl: 'subject.html',
})
export class SubjectPage {

  public subjects = [{name: "Mechanics I", id: 1, imgSrc: "../../assets/img/sub_mech.jpg"},{name: 'Thermodynamics', id: 2, imgSrc: "../../assets/img/sub_ece.jpg"},{name: "Automobile", id: 3, imgSrc: "../../assets/img/sub_cse.jpeg"},{name: "Machine Design", id: 4, imgSrc: "../../assets/img/sub_ee.jpg"}];
  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectPage');
  }

  subjectSelected(subjectId){
    //space for calling a service to fetch the subjectes of selected specialisation
    this.nav.push(VideoPage);

  }

}
