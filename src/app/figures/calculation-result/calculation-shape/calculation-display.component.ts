import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculation-display',
  template: `
  <div class="card-group">
    <div class="card my-5 p-0">

      <div class="card-header">
        <h2>{{ name }}</h2>
      </div>

      <div class="card-body">
        <p class="card-text">{{ name }} {{ 'SHAPE.DISPLAY.RESULT' | translate }}
          <ng-content></ng-content>
        </p>
        <span class="badge badge-result">
          <p class="result">{{ calculationResult }}</p>
        </span>
      </div>

    </div>
  </div>
  `,
  styles: [`
    .badge-result {
      background-color: grey;
      color: white;
    }
    @media all and (max-width: 540px) {
      .result, .card-text {
        font-size: .8rem;
      }
      .badge {
        height: 1.6rem;
      }
    }
    @media all and (min-width: 541px) {
      .badge {
        height: 1.7rem;
      }
    }
  `]
})

export class CalculationDisplayComponent {

  @Input() name;
  @Input() calculationResult;

}
