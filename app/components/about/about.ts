import {Component} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'about',
  templateUrl: 'components/about/about.html',
  styleUrls: ['components/about/about.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class About {

  constructor(http:Http) {
    
  }
}
