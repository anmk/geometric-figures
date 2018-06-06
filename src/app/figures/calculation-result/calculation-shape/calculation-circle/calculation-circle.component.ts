import { Component, OnInit } from '@angular/core';

import { CalculationShapeComponent } from '../calculation-shape.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-circle',
  templateUrl: './calculation-circle.component.html'
})

export class CalculationCircleComponent extends CalculationShapeComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super();
  }

  CIRCLE_LABEL = this.figuresService.availableShapes['4'].label;
  PERIMETER = this.figuresService.availableCalculations['0'].type;
  NAME = this.CIRCLE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === this.PERIMETER) ?
    this.getPerimeter(
      +this.allCalculationData.sideALength
    ) :
    this.getArea(
      +this.allCalculationData.sideALength
    );
  }

  protected getPerimeter(...args) {
    return +args.map((val) => (2 * Math.PI * val).toFixed(3));
  }

  protected getArea(...args) {
    return +args.map((val) => (Math.PI * val ** 2).toFixed(3));
  }

}
