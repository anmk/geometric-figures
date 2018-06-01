import { Component, Input } from '@angular/core';

import { AllCalculationData } from '../types';

@Component({
  selector: 'app-card-top',
  template: `
  <div class="card-group card-out card-bar">
    <div>
      <span class="badge badge-light" *ngIf="allCalculationData?.shape">{{ allCalculationData?.shapeName }}</span>
      <span class="badge badge-success">{{ allCalculationData?.shape }}</span>
      <span class="badge badge-equilateral" *ngIf="allCalculationData?.checkTriangle">E</span>
      <span class="badge badge-light" *ngIf="allCalculationData?.calculationType">{{ allCalculationData?.calculationName }}</span>
      <span class="badge badge-info">{{ allCalculationData?.calculationType }}</span>
    </div>
  </div>
  `,
  styles: []
})
export class CardTopComponent {

  @Input() allCalculationData: AllCalculationData;

}
