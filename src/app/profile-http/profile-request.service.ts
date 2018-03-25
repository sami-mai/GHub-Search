import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {UserProfile} from  '../user-class/user-profile'

@Injectable()
export class ProfileRequestService {

private _apiKey:string = environment.gitHub_apiKey;
login:string = 'sami-mai'
profile:UserProfile;


constructor(private http:HttpClient) {
this.profile=new UserProfile("","","");
  }

  getProfileInfo(){

    interface ApiResponse{
        login:string;
        email:string;
        avatar_url:string

      }
    let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/" + this.login +
    "?access_token=" + this._apiKey).toPromise().then(response=>{

      this.profile.login=response.login
      this.profile.email=response.email
      this.profile.avatar_url=response.avatar_url

      resolve()
      },
      error=>{
      this.profile.login=''
      this.profile.email=''
      this.profile.avatar_url=''
      reject(error)
        }
      )
   })
   return promise
  }
}




      // getProfileInfo(){
       // this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "?access_token=" + "environment.apiKey")
