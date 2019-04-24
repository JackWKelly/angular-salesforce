import { Injectable } from '@angular/core';
import { Record, Data, Faq } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SfdataService {

  constructor(private http: HttpClient) { }

  getFaqs(name: String): Observable<Data> {
    let apiUrl = `http://localhost:3000/api/db/getfaqs?name=${name}`;
    return this.http.get<Data>(apiUrl, httpOptions);
  };



};

/*      .subscribe(sfData => {
  let faqs: Faq[];
  //could be foreach?
  for (let i: number = 0; i < sfData.records.length; i++) {
    let tempFaq: Faq;
    tempFaq.name = sfData.records[i].product__r.faq__r.Name;
    tempFaq.content = sfData.records[i].product__r.faq__r.Content__c;
    faqs.push(tempFaq);
  };
});
*/