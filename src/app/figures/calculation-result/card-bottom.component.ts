import { Component, Input } from '@angular/core';

import { AllCalculationData } from '../types';

@Component({
  selector: 'app-card-bottom',
  template: `
    <div class="card-group card-out card-bar">
      <div>
        <span class="badge badge-light" *ngIf="allCalculationData.sideALength">{{ allCalculationData.resNameALength }}</span>
        <span class="badge badge-warning">{{ allCalculationData.sideALength }}</span>
        <span class="badge badge-light" *ngIf="allCalculationData.sideBLength">{{ allCalculationData.resNameBLength }}</span>
        <span class="badge badge-warning">{{ allCalculationData.sideBLength }}</span>
        <span class="badge badge-light" *ngIf="allCalculationData.sideCLength">{{ allCalculationData.resNameCLength }}</span>
        <span class="badge badge-warning">{{ allCalculationData.sideCLength }}</span>
      </div>
    </div>
    `,
    styles: [`
      .badge-light {
        font-size: .6rem;
        line-height: .6rem;
      }
    `]
  })
export class CardBottomComponent {

  @Input() allCalculationData: AllCalculationData;

}
