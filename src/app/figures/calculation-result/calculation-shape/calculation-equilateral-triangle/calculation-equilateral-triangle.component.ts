import { Component, OnInit } from '@angular/core';

import { CalculationShapeComponent } from '../calculation-shape.component';
import { AllCalculationData } from '../../../types';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-equilateral-triangle',
  templateUrl: './calculation-equilateral-triangle.component.html'
})

export class CalculationEquilateralTriangleComponent extends CalculationShapeComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super();
  }

  EQUILATERAL = 'Equilateral';
  EQUILATERAL_TRIANGLE_LABEL = `${this.EQUILATERAL} ${this.figuresService.availableShapes['0'].label}`;
  PERIMETER = this.figuresService.availableCalculations['0'].type;
  NAME = this.EQUILATERAL_TRIANGLE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === this.PERIMETER) ?
    this.getPerimeter(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength
    ) :
    this.getArea(
      +this.allCalculationData.sideALength
    );
  }

  protected getArea(...args) {
    return +args.map((val) => (( val ** 2) * Math.sqrt(3) / 4).toFixed(3));
  }

}
