import { Component, OnInit } from '@angular/core';

import { CalculationSquareComponent } from '../calculation-square/calculation-square.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-cube',
  templateUrl: './calculation-cube.component.html'
})

export class CalculationCubeComponent extends CalculationSquareComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super(figuresService);
  }

  CUBE_LABEL = this.figuresService.availableShapes['5'].label;
  AREA = this.figuresService.availableCalculations['1'].type;
  NAME = this.CUBE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations() {
    this.calculationResult = (this.allCalculationData.calculationType === this.AREA) ?
    this.getArea(
      +this.allCalculationData.sideALength * 6,
      +this.allCalculationData.sideALength) :
    this.getArea(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideALength);
  }

}
