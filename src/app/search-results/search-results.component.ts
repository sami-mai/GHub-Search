import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profile-http/profile-request.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  // providers:[ProfileRequestService],
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
