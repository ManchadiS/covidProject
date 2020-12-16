import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  baseUrl: string = "http://localhost:8000";/*development*/
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  headers() {
    // const httpOptions = new HttpHeaders({
    //   'Authorization': "Bearer " + localStorage.getItem('access_token'),
    //   'Accept-Language': acceptLang
    // })
    const httpOptions = new HttpHeaders({});
    return httpOptions;
  }

  signUp(data) {
    return this.http.post(this.baseUrl + '/users/saveUser', data, { headers: this.headers() })
  }

  signIn(data) {
    return this.http.post(this.baseUrl + '/users/login', data, { headers: this.headers() })
  }

  getAllLabs() {
    return this.http.get(this.baseUrl + '/labdata/getAllLabs', { headers: this.headers() })
  }

  getLabsByState(stateName) {
    return this.http.get(this.baseUrl + '/labdata/getlabDataByState/'+stateName,  { headers: this.headers() })
  }

  getAllHelpLineNumbers() {
    return this.http.get(this.baseUrl + '/helpline/getAllHelpLineNumbers',  { headers: this.headers() })
  }

  
  getHelpLineNumberByState(stateName) {
    return this.http.get(this.baseUrl + '/helpline/getHelpLineNumberByState/'+stateName,  { headers: this.headers() })
  }
}
