import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-bottom-entry',
  template: `
    <div class="card-group card-out card-bar">
      <div class="">
        <span class="badge badge-light" *ngIf="entryForm.value.sideALength">Fv </span>
        <span class="badge badge-warning">{{ entryForm.value.sideALength }}</span>
        <span class="badge badge-light" *ngIf="entryForm.value.sideBLength">Sv </span>
        <span class="badge badge-warning">{{ entryForm.value.sideBLength }}</span>
        <span class="badge badge-light" *ngIf="entryForm.value.sideCLength">Tv </span>
        <span class="badge badge-warning">{{ entryForm.value.sideCLength }}</span>
      </div>
    </div>
  `,
  styles: []
})
export class CardBottomEntryComponent {

  @Input() entryForm: FormGroup;

}
