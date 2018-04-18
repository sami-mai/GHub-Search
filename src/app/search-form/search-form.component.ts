import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profile-http/profile-request.service';
import {UserProfile} from '../user-class/user-profile';
import {UserRepos} from '../user-class/user-repos';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  providers:[ProfileRequestService],
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


  public username:string;
  public profile:UserProfile;
  public repos:UserRepos;


  constructor(private profileRequest:ProfileRequestService) {}

  findProfile(username) {
    this.profileRequest.updateProfile(this.username)
    this.profileRequest.getProfileInfo()
    this.profile = this.profileRequest.profile
    // this.profileRequest.getProfileRepo()
    // this.repos = this.profileRequest.repos


  }

  findRepos(username) {
    this.profileRequest.updateProfile(this.username)
    // this.profileRequest.getProfileInfo()
    // this.profile = this.profileRequest.profile
    this.profileRequest.getProfileRepo()
    this.repos = this.profileRequest.repos


  }

  ngOnInit() {
  }

}
