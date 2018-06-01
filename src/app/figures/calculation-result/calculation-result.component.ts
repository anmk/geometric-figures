import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FiguresService } from '../figures.service';
import { AllCalculationData } from '../types/all-calculation-data';

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html'
})

export class CalculationResultComponent implements OnInit {

  constructor(private figuresService: FiguresService,
              private router: Router) { }

  private allCalculationDataSubscription: Subscription;
  private allCalculationData: AllCalculationData;

  @Output() shownAllCalculationData = new EventEmitter();

  private showAllCalculationData(): void {
    this.shownAllCalculationData.emit(this.allCalculationData);
  }

  ngOnInit() {
    this.allCalculationDataSubscription = this.figuresService.getAllDataStream()
   .subscribe(allCalculationData =>  this.allCalculationData = allCalculationData);
    this.showAllCalculationData();
  }

}
