import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] =["Adam Taylor", 'E234',"at@abc.net"]
  info2: string[] =["Shaun Micheal", 'E236',"sm@abc.net"]
  info3: string[] =["Mark Fisher", 'E764',"nf@abc.net"]


  geInfo1() : string[] { 
return this.info1
  }
  geInfo2() : string[] { 
    return this.info2
      }
      geInfo3() : string[] { 
        return this.info3
          }
  constructor() { }
}
