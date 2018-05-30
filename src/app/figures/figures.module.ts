import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { DataSelectorComponent } from './data-selector/data-selector.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { FiguresService } from './figures.service';
import { routerModule } from './figures.routing';
import { CalculationResultComponent } from './calculation-result/calculation-result.component';
import { CalculationShapeComponent } from './calculation-result/calculation-shape/calculation-shape.component';
import {
  CalculationEquilateralTriangleComponent
} from './calculation-result/calculation-shape/calculation-equilateral-triangle/calculation-equilateral-triangle.component';
import {
  CalculationRectangleComponent
} from './calculation-result/calculation-shape/calculation-rectangle/calculation-rectangle.component';
import { CalculationSquareComponent } from './calculation-result/calculation-shape/calculation-square/calculation-square.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { CalculationEllipseComponent } from './calculation-result/calculation-shape/calculation-ellipse/calculation-ellipse.component';
import { CalculationCircleComponent } from './calculation-result/calculation-shape/calculation-circle/calculation-circle.component';
import { CalculationDisplayComponent } from './calculation-result/calculation-shape/calculation-display.component';
import { CardBottomEntryComponent } from './data-entry/card-bottom-entry.component';
import { CardTopSelectorComponent } from './data-selector/card-top-selector.component';
import { CardTopComponent } from './calculation-result/card-top.component';
import { CardBottomComponent } from './calculation-result/card-bottom.component';
import { EmptyShapeComponent } from './calculation-result/calculation-shape/empty-shape/empty-shape.component';
import { CalculationCubeComponent } from './calculation-result/calculation-shape/calculation-cube/calculation-cube.component';
import { CalculationCuboidComponent } from './calculation-result/calculation-shape/calculation-cuboid/calculation-cuboid.component';
import { CalculationSphereComponent } from './calculation-result/calculation-shape/calculation-sphere/calculation-sphere.component';
import { CalculationTriangleComponent } from './calculation-result/calculation-shape/calculation-triangle/calculation-triangle.component';
import { I18nComponent } from './core/i18n/i18n.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routerModule,
    TranslateModule
  ],
  declarations: [
    DataSelectorComponent,
    DataEntryComponent,
    CalculationResultComponent,
    CalculationShapeComponent,
    CalculationEquilateralTriangleComponent,
    CalculationRectangleComponent,
    CalculationSquareComponent,
    HeaderComponent,
    HomeComponent,
    CalculationEllipseComponent,
    CalculationCircleComponent,
    CalculationDisplayComponent,
    CardBottomEntryComponent,
    CardTopSelectorComponent,
    CardTopComponent,
    CardBottomComponent,
    EmptyShapeComponent,
    CalculationCubeComponent,
    CalculationCuboidComponent,
    CalculationSphereComponent,
    CalculationTriangleComponent,
    I18nComponent
  ],
  providers: [
    FiguresService
  ]
})
export class FiguresModule { }
