import { RouterModule, Routes } from '@angular/router';

import { DataSelectorComponent } from './data-selector/data-selector.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { CalculationResultComponent } from './calculation-result/calculation-result.component';
import { CalculationShapeComponent } from './calculation-result/calculation-shape/calculation-shape.component';
import {
  CalculationRectangleComponent
} from './calculation-result/calculation-shape/calculation-rectangle/calculation-rectangle.component';
import { CalculationSquareComponent } from './calculation-result/calculation-shape/calculation-square/calculation-square.component';
import {
  CalculationEquilateralTriangleComponent
} from './calculation-result/calculation-shape/calculation-equilateral-triangle/calculation-equilateral-triangle.component';
import { HomeComponent } from './home/home.component';

const routesConfig: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'selection', component: DataSelectorComponent },
      { path: 'entry', component: DataEntryComponent },
      { path: 'shape', component: CalculationShapeComponent },
      { path: 'result', component: CalculationResultComponent}
];

export const routerModule = RouterModule.forChild(routesConfig);
