import { Component, OnInit } from '@angular/core';

import { CalculationRectangleComponent } from '../calculation-rectangle/calculation-rectangle.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-square',
  templateUrl: './calculation-square.component.html'
})

export class CalculationSquareComponent extends CalculationRectangleComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super(figuresService);
  }

  SQUARE_LABEL = this.figuresService.availableShapes['2'].label;
  PERIMETER = this.figuresService.availableCalculations['0'].type;
  NAME = this.SQUARE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === this.PERIMETER) ?
    this.getPerimeter(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength) :
    this.getArea(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength);
  }

}
