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
  profile:UserProfile;
  repos:UserRepos;
  username:string;



  findProfile() {
    this.profileRequest.updateProfile(this.username)
    this.profileRequest.getProfileInfo()
    console.log(this.profileRequest.profile)
  }

  constructor(private profileRequest:ProfileRequestService) {}



  ngOnInit() {
  }

}
