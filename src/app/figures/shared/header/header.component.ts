import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="card-deck">
      <div class="card mb-5">
        <div class="card-body row justify-content-around">
         <h1 class="card-title display-4-">{{ 'HEADER.TITLE' | translate }}</h1>
         <app-i18n></app-i18n>
        </div>
      </div>
    </div>
  `,
  styles: []
})

export class HeaderComponent {}
