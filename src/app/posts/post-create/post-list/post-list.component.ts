import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SfdataService } from '../../../sfdata.service';
import { Record, Data, Faq } from '../../../models';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1200)
      ])
    ]),
    trigger('rotate', [
      transition('void => *', [
        style({
          transform: 'rotateY(90deg)'
        }),
        animate(500)
      ])
    ])
  ]
})

export class PostListComponent {

  constructor(private sfDataService: SfdataService) { }
  posts: Faq[];
  name: string;

  onLoginClick() {
    let customerName: string = this.name;
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
