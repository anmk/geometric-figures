import { Component, OnInit } from '@angular/core';

import { CalculationRectangleComponent } from '../calculation-rectangle/calculation-rectangle.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-cuboid',
  templateUrl: './calculation-cuboid.component.html'
})

export class CalculationCuboidComponent extends CalculationRectangleComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super(figuresService);
  }

  CUBOID_LABEL = this.figuresService.availableShapes['6'].label;
  AREA = this.figuresService.availableCalculations['1'].type;
  NAME = this.CUBOID_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === this.AREA) ?
    this.getArea(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength,
      +this.allCalculationData.sideCLength,
    ) :
    this.getVolume(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength,
      +this.allCalculationData.sideCLength,
    );
  }

  protected getArea(...args) {
    return ((this.allCalculationData.sideALength * this.allCalculationData.sideBLength)
     + (this.allCalculationData.sideBLength * this.allCalculationData.sideCLength)
     + (this.allCalculationData.sideCLength * this.allCalculationData.sideALength)) * 2;
  }

  protected getVolume(...args) {
    return super.getArea(...args);
  }

}
