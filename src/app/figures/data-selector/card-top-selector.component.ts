import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-top-selector',
  template: `
    <div class="card-group card-out card-bar">
      <div>
        <span class="badge badge-light"> </span>
        <span class="badge badge-success">{{ shapeForm.value.shape }}</span>
        <span class="badge badge-equilateral" *ngIf="shapeForm.value.checkTriangle">E</span>
        <span class="badge badge-light"> </span>
        <span class="badge badge-info">{{ shapeForm.value.calculationType }}</span>
      </div>
    </div>
  `,
  styles: [`
    .badge-success, .badge-info {
      margin-left: 1rem;
    }
  `]
})
export class CardTopSelectorComponent {

  @Input() shapeForm: FormGroup;

}
