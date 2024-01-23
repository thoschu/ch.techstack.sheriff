import {Component, inject} from '@angular/core';

// import { HolidaysService } from '../data/holidays.service';
import {ExternalService, HolidaysFacadeService} from '../data/';

@Component({
  selector: 'app-holidays',
  standalone: true,
  imports: [],
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.scss'
})
export class HolidaysComponent {
  constructor(
    // private readonly holidaysService: HolidaysService
    private readonly holidaysFacadeService: HolidaysFacadeService
  ) {
    this.holidaysFacadeService.holiday();

    inject(ExternalService).log();

    console.log('loaded', this.holidaysFacadeService.internalService.load());
  }
}
