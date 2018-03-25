import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {UserProfile} from  '../user-class/user-profile'

@Injectable()
export class ProfileRequestService {

private _apiKey:string = environment.gitHub_apiKey;

profile:UserProfile;

constructor(private http:HttpClient) {
this.profile=new UserProfile("","");
  }

  profileRequest(){

    interface ApiResponse{
        login:string;
        email:string

      }
    let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/" + "this.login" + "?access_token=" + "_apiKey").toPromise().then(response=>{

      this.profile.login=response.login
      this.profile.email=response.email

      resolve()
      },
      error=>{
      this.profile.login='sami-mai'
      this.profile.email='samirah.maison@gamil.com'
      reject(error)
        }
      )
   })
   return promise
  }
}




      // getProfileInfo(){
       // this.http.get<ApiResponse>("https://api.github.com/users/" + this.username + "?access_token=" + "environment.apiKey")
