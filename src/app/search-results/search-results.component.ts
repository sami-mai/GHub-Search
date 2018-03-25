import { Component, OnInit } from '@angular/core';
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

  profile:UserProfile;
  repos:UserRepos;
  username:string;


  constructor(private profileRequest:ProfileRequestService) {

  }

  findProfile(){
    this.profileRequest.updateProfile(this.username)
    this.profile=this.profileRequest.profile
    this.repos=this.profileRequest.repos
  }

  ngOnInit() {
    this.profileRequest.getProfileInfo()
    console.log(this.profile);

    this.profileRequest.getProfileRepo()
    console.log(this.repos);

  }
}
