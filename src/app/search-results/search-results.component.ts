import { Component, OnInit, Input } from '@angular/core';
import { ProfileRequestService } from '../profile-http/profile-request.service';
import {UserProfile} from '../user-class/user-profile';
import {UserRepos} from '../user-class/user-repos';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  providers:[ProfileRequestService],
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {

  @Input('searchProfile') public profile;

  @Input('searchRepos') public repos;


  constructor(private profileRequest:ProfileRequestService) {
    // this.profile=this.profileRequest.profile
    // this.repos=this.profileRequest.repos

  }

  ngOnInit() {

  }
}
