import { Component, OnInit } from '@angular/core';

import { CalculationShapeComponent } from '../calculation-result/calculation-shape/calculation-shape.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent extends CalculationShapeComponent implements OnInit {

  ngOnInit() {
    super.scrollToTop();
  }

}
