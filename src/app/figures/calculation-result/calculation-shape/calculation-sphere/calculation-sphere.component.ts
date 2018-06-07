import { Component, OnInit } from '@angular/core';

import { CalculationCircleComponent } from '../calculation-circle/calculation-circle.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-sphere',
  templateUrl: './calculation-sphere.component.html'
})

export class CalculationSphereComponent extends CalculationCircleComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super(figuresService);
  }

  SPHERE_LABEL = this.figuresService.availableShapes['7'].label;
  AREA = this.figuresService.availableCalculations['1'].type;
  NAME = this.SPHERE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === this.AREA) ?
    this.getArea(
      +this.allCalculationData.sideALength * 2
    ) :
    this.getVolume(
      +this.allCalculationData.sideALength
    );
  }

  protected getVolume(...args) {
    return +args.map((val) => (super.getArea(...args) * val * 4 / 3).toFixed(3));
  }

}
