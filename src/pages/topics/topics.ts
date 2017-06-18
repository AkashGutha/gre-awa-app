import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { getArguments, getIssues } from './../../data/data';

/**
 * Generated class for the TopicsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {

  public result: string = "";

  argumentsList: string;
  issuesList: string;

  issuesArray: string[];
  argumentsArray: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.argumentsList = getArguments();
    this.issuesList = getIssues();


    console.log(this.argumentsArray);

    this.argumentsArray = this.argumentsList.split('\n');
    this.issuesArray = this.issuesList.split('\n');


    console.log(this.argumentsArray);

    this.argumentsArray = this.argumentsArray.filter(value => {
      value = value.trim();
      if (value !== '') return true;
      else return false;
    });

    this.issuesArray = this.issuesArray.filter(value => {
      value = value.trim();
      if (value !== '') return true;
      else return false;
    });

    console.log(this.argumentsArray);
    console.log(this.issuesArray);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
  }

  GenerateRandomIssue() {
    let length = this.issuesArray.length;
    let index = Math.floor(Math.random() * length);


    console.log(index);
    let s = "";

    while (!this.issuesArray[index].startsWith("Write a response")) {
      index++;
    }

    console.log('after the search it is ' + index);

    s = this.issuesArray[index] + s;
    index--;

    for (var i = 0; i < 3; i++) {
      if (index < 0) break;
      if (this.issuesArray[index].startsWith("Write a response")) break;
      s = this.issuesArray[index] + "\n  <br><br>" + s;
      index--;
    }

    console.log('after the iteration it is ' + index);

    this.result = s;
  }


  GenerateRandomArgument() {
    let length = this.argumentsArray.length;
    let index = Math.floor(Math.random() * length);

    console.log(index);
    let s = "";

    while (!this.argumentsArray[index].startsWith("Write a response")) {
      index++;
    }

    console.log('after the search it is ' + index);

    s = this.argumentsArray[index] + s;
    index--;

    for (var i = 0; i < 3; i++) {
      if (index < 0) break;
      if (this.argumentsArray[index].startsWith("Write a response")) break;
      s = this.argumentsArray[index] + "\n  <br><br>" + s;
      index--;
    }

    console.log('after the iteration it is ' + index);

    this.result = s;
  }

}
