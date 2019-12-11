import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pageContent = {
	  header: {
		  title: 'My Movies List',
		  body: 'This is a list of the movies in this site'
    }
  };

}
