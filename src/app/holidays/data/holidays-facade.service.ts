import { Injectable } from '@angular/core';

import { HolidaysService } from './holidays.service';
import { InternalService } from './internal.service';

@Injectable({
  providedIn: 'root'
})
export class HolidaysFacadeService {

  constructor(
    public readonly holidaysService: HolidaysService,
    public readonly internalService: InternalService
  ) { }

  public holiday(): void {
    console.log('HolidaysFacadeService.holiday()');
  }
}
