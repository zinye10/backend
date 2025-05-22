import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Apollo } from 'apollo-angular';
import { gql, Observable, useQuery } from '@apollo/client';

@Injectable({
  providedIn: 'root'
})

export class SignalService {

  constructor(private apollo: Apollo) { }

  private signalSubject = new BehaviorSubject<any>(this.getData());
  signal$ = this.signalSubject.asObservable();
  

  getData(){
    return this.apollo
          .watchQuery({
            query: gql`
              query Users {
                users {
                  user_id
                  username
                }
              }
            `,
          })
          .valueChanges;
  }


  updateSignal(newSignal: string) {
    this.signalSubject.next(newSignal);
  }
}
