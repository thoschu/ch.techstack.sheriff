import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  constructor() { }

  public load(): boolean {
    console.log('InternalService.load()');

    return true;
  }
}
