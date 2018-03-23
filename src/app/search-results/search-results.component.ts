import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  providers:[ProfileService],
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
