import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserProfile} from  '../user-class/user-profile';
import {UserRepos} from '../user-class/user-repos';

@Injectable()
export class ProfileRequestService {
private _apiKey:string = environment.gitHubapiKey;
private login:string;
profile:UserProfile;
repos:UserRepos;


constructor(private http:HttpClient) {
this.profile=new UserProfile("","","","","",)
this.login = 'sami-mai';
this.repos=new UserRepos("","","");
}
  updateProfile(username:string){
    this.login=username;
  }

  getProfileInfo(){

    interface ApiResponse{

        name:string;
        login:string;
        email:string;
        avatar_url:string;
        html_url:string;

      }
    let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/" + this.login +
    "?access_token=" + this._apiKey).toPromise().then(response=>{

      this.profile.name=response.name
      this.profile.login=response.login
      this.profile.email=response.email
      this.profile.avatar_url=response.avatar_url
      this.profile.html_url=response.html_url

      resolve()
      },
      error=>{
      this.profile.name='Samirah Maison'
      this.profile.login=''
      this.profile.email=''
      this.profile.avatar_url=''
      this.profile.html_url=''
      reject(error)
        }
      )
   })
   return promise
  }

getProfileRepo(){
  interface ApiResponse{

    name:string;
    repo_url:string;
    description:string

    }
  let promise =new Promise((resolve,reject)=>{
  this.http.get<ApiResponse>("https://api.github.com/users/" + this.login +
  "/repos?access_token=" + this._apiKey).toPromise().then(response=>{

    this.repos.name=response.name
    this.repos.repo_url=response.repo_url
    this.repos.description=response.description

    resolve()
    },
    error=>{

    reject(error)
      }
    )
 })
 return promise
}

// findProfile() {
//   this.profileRequest.updateProfile(this.username);
// }

}
