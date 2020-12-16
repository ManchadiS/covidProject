import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ExternalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExternalProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ExternalProvider Provider');
  }

  getAllCountryStats() {
    const httpOptions = new HttpHeaders({
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '103b170122msh384999dba3f24d8p19afdbjsn65476db3e7e3',
    })
    return this.http.get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats', {headers:httpOptions}) 
  }

  getData
}
