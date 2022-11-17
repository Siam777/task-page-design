import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConsolidationHubService {

  confirmTruck$: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  setConfirmationOfAddingTruck(isConfirmed: boolean) {
    this.confirmTruck$.emit(isConfirmed);
  }

  getConfirmationOfAddingTruck(): EventEmitter<boolean> {
    return this.confirmTruck$;
  }
}
