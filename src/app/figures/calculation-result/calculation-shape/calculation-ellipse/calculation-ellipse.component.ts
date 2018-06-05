import { Component, OnInit } from '@angular/core';

import { CalculationShapeComponent } from '../calculation-shape.component';
import { FiguresService } from '../../../figures.service';

@Component({
  selector: 'app-calculation-ellipse',
  templateUrl: './calculation-ellipse.component.html'
})

export class CalculationEllipseComponent extends CalculationShapeComponent implements OnInit {

  constructor(protected figuresService: FiguresService) {
    super();
  }

  ELLIPSE_LABEL = this.figuresService.availableShapes['3'].label;
  PERIMETER = this.figuresService.availableCalculations['0'].type;
  NAME = this.ELLIPSE_LABEL;

  ngOnInit() {
    this.getCalculations();
  }

  /* The approximation of the Ramanujan, an Indian mathematician, was used to calculate the ellipse's circumference. */
  /* https://www.mathsisfun.com/geometry/ellipse-perimeter.html */
  /* Approximation 3 */

  private getH(...args) {
    return +args.reduce((prevVal, val) => ((prevVal - val) ** 2) / ((prevVal + val) ** 2));
  }

  protected getPerimeter(...args) {
    const h = this.getH(...args);
    return +args.reduce((prevVal, val) => (Math.PI * (prevVal + val) * (1 + (3 * h) / (10 + Math.sqrt(4 - (3 * h))))).toFixed(3));
  }

  protected getArea(...args) {
    return +args.reduce((prevVal, val) => (Math.PI * prevVal * val).toFixed(3));
  }

}
