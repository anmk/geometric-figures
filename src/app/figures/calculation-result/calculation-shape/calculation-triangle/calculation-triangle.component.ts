import { Component, OnInit } from '@angular/core';
import { CalculationRectangleComponent } from '../calculation-rectangle/calculation-rectangle.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-triangle',
  templateUrl: './calculation-triangle.component.html'
})

export class CalculationTriangleComponent extends CalculationRectangleComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super(figuresService);
  }

  TRIANGLE_LABEL = this.figuresService.availableShapes['0'].label;
  PERIMETER = this.figuresService.availableCalculations['0'].type;
  NAME = this.TRIANGLE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === this.PERIMETER) ?
    this.getPerimeter(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength,
      +this.allCalculationData.sideCLength
    ) :
    this.getArea(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength / 2
    );
  }

}
