import { Component, Input, OnInit } from '@angular/core';

import { AllCalculationData } from '../../types';

@Component({
  selector: 'app-calculation-shape',
  templateUrl: './calculation-shape.component.html'
})
export class CalculationShapeComponent implements OnInit {

  @Input() allCalculationData: AllCalculationData;
  @Input() calculationResult: number;

  onShownAllCalculationData(allCalculationData) {
    this.allCalculationData = allCalculationData;
  }

  ngOnInit(): void {
    this.scrollToTop();
  }

  protected getCalculations(): void {
    this.calculationResult = (this.allCalculationData.calculationType === 'perimeter') ?
    this.getPerimeter(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength
    ) :
    this.getArea(
      +this.allCalculationData.sideALength,
      +this.allCalculationData.sideBLength
    );
  }

  protected getPerimeter(...args) {
    return +args.reduce((prevVal, val) => (prevVal + val)).toFixed(3);
  }

  protected getArea(...args) {
    return +args.reduce((prevVal, val) => (prevVal * val)).toFixed(3);
  }

  protected scrollToTop() {
    const scrollToTop = (screen.width < 992) ?  window.scrollTo(0, 0) : null;
  }

}
