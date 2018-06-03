import { Component, OnInit, Input } from '@angular/core';

import { CalculationShapeComponent } from '../calculation-shape.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-rectangle',
  templateUrl: './calculation-rectangle.component.html'
})

export class CalculationRectangleComponent extends CalculationShapeComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super();
  }

  RECTANGLE_LABEL = this.figuresService.availableShapes['1'].label;
  PERIMETER = this.figuresService.availableCalculations['0'].type;
  NAME = this.RECTANGLE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === this.PERIMETER) ?
    this.getPerimeter(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength,
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength
    ) :
    this.getArea(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength
    );
  }

}
