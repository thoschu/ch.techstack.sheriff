import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor() { }

  public log(): void {
    console.log('ExternalService.log()');
  }
}
