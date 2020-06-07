import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private totalPagesNumber = new BehaviorSubject(1);
  sharedTotalPagesNumber = this.totalPagesNumber.asObservable();

  constructor() { }

  newTotalPagesNUmber(totalPages: number){
    this.totalPagesNumber.next(totalPages);
    console.log(totalPages);
  }
}
