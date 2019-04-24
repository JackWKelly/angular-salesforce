export class Record {
    product__r: {
      attributes: {
        type: string,
        url: string
      },
      faq__r: {
        attributes: {
          type: string,
          url: string
        },
        Name: string,
        Content__c: string
      }
    };
  };
  
  export class Data {
    totalSize: number;
    done: boolean;
    records: [Record];
  };
  
  export class Faq {
    name: string;
    content: string;
  };