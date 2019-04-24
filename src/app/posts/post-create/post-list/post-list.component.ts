import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SfdataService } from '../../../sfdata.service';
import { Record, Data, Faq } from '../../../models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {

  constructor(private sfDataService: SfdataService) { }

  name = new FormControl('');
  posts: Faq[];

  onSubmit() {
    let customerName: string = this.name.value;
    console.log(customerName);
    this.sfDataService.getFaqs(customerName)
      .subscribe(sfData => {
        let faqs: Faq[] = [];
        //could be foreach?
        for (let i: number = 0; i < sfData.records.length; i++) {
          let tempFaq: Faq = new Faq;
          tempFaq.name = sfData.records[i].product__r.faq__r.Name;
          tempFaq.content = sfData.records[i].product__r.faq__r.Content__c;
          faqs.push(tempFaq);
        };
        this.posts = faqs;
        console.log(this.posts);
      });

  };

};
