import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import 'rxjs/Rx';

import { SelectionData, AllCalculationData } from './types';

@Injectable()
export class FiguresService {

  availableShapes: object[] = [
    { type: 'triangle', label: 'Triangle' },
    { type: 'rectangle', label: 'Rectangle' },
    { type: 'square', label: 'Square' },
    { type: 'ellipse', label: 'Ellipse' },
    { type: 'circle', label: 'Circle' },
    { type: 'cube', label: 'Cube' },
    { type: 'cuboid', label: 'Cuboid' },
    { type: 'sphere', label: 'Sphere' }
  ];

  availableCalculations: object[] = [
    { type: 'perimeter', label: 'Perimeter' },
    { type: 'area', label: 'Area' },
    { type: 'volume', label: 'Volume' }
  ];

  TRIANGLE = this.availableShapes['0'].type;
  RECTANGLE = this.availableShapes['1'].type;
  SQUARE = this.availableShapes['2'].type;
  ELLIPSE = this.availableShapes['3'].type;
  CIRCLE = this.availableShapes['4'].type;
  CUBE = this.availableShapes['5'].type;
  CUBOID = this.availableShapes['6'].type;
  SPHERE = this.availableShapes['7'].type;
  PERIMETER = this.availableCalculations['0'].type;
  AREA = this.availableCalculations['1'].type;
  VOLUME = this.availableCalculations['2'].type;

  allCalculationData: AllCalculationData = {};
  allCalculationDataStream = new Subject();

  getShapes(): object[] {
    return this.availableShapes;
  }

  getAllDataStream(): Observable<{}> {
    return Observable
      .from(this.allCalculationDataStream)
      .startWith(this.allCalculationData);
  }

  addToAllDataStreem(allCalculationData): void {
    this.allCalculationData = allCalculationData;
    this.allCalculationDataStream
      .next(this.allCalculationData);
  }

  sideNames(): void {
    this.sideNameA();
    this.sideNameB();
    this.sideNameC();
  }

  resNames(): void {
    this.resNameA();
    this.resNameB();
    this.resNameC();
    this.resShapeName();
    this.resCalculationName();
  }

  private resShapeName(): void {
    this.allCalculationData.shapeName = ((screen.width >= 1200)
      && (this.allCalculationData.shape !== null)) ? 'Shape' :
    this.allCalculationData.shapeName = ((screen.width < 1200)
      && (this.allCalculationData.shape !== null)) ? 'S' :
    this.allCalculationData.shapeName;
  }

  private resCalculationName(): void {
    this.allCalculationData.calculationName = ((screen.width >= 1200)
      && (this.allCalculationData.calculationType !== null)) ? 'Calculation' :
    this.allCalculationData.calculationName = ((screen.width < 1200)
      && (this.allCalculationData.calculationType !== null)) ? 'C' :
    this.allCalculationData.calculationName;
  }

  private sideNameA(): void {
    this.allCalculationData.nameALength = (this.allCalculationData.shape === this.TRIANGLE
      || this.allCalculationData.shape === this.SQUARE || this.allCalculationData.shape === this.CUBE) ? 'side length' :
    this.allCalculationData.nameALength = (this.allCalculationData.shape === this.RECTANGLE
      || this.allCalculationData.shape === this.CUBOID) ? 'first side length' :
    this.allCalculationData.nameALength = (this.allCalculationData.shape === this.ELLIPSE) ? 'first semi-axis' :
    this.allCalculationData.nameALength = (this.allCalculationData.shape === this.CIRCLE
      || this.allCalculationData.shape === this.SPHERE) ? 'radius' :
    this.allCalculationData.nameALength;
  }

  private sideNameB(): void {
    this.allCalculationData.nameBLength = (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.PERIMETER
      && this.allCalculationData.checkTriangle === false) ? 'second side length' :
    this.allCalculationData.nameBLength = (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.AREA
      && this.allCalculationData.checkTriangle === false) ? 'height' :
    this.allCalculationData.nameBLength = (this.allCalculationData.shape === this.SQUARE
      || this.allCalculationData.shape === this.CUBE) ? '' :
    this.allCalculationData.nameBLength = (this.allCalculationData.shape === this.RECTANGLE
      || this.allCalculationData.shape === this.CUBOID) ? 'second side length' :
    this.allCalculationData.nameBLength = (this.allCalculationData.shape === this.ELLIPSE) ? 'second semi-axis' :
    this.allCalculationData.nameBLength = (this.allCalculationData.shape === this.CIRCLE) ? '' :
    this.allCalculationData.nameBLength = (this.allCalculationData.shape === this.CUBE) ? 'second side length' :
    this.allCalculationData.nameBLength;
  }

  private sideNameC(): void {
    this.allCalculationData.nameCLength = (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.PERIMETER
      && this.allCalculationData.checkTriangle === false) ? 'third side length' :
    this.allCalculationData.nameCLength = (this.allCalculationData.shape === this.CUBOID) ? 'height' :
    this.allCalculationData.nameCLength;
  }

  private resNameA(): void {
    this.allCalculationData.resNameALength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.TRIANGLE
      || this.allCalculationData.shape === this.SQUARE || this.allCalculationData.shape === this.CUBE)) ? 'side length' :
    this.allCalculationData.resNameALength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.RECTANGLE
      || this.allCalculationData.shape === this.CUBOID)) ? 'first side length' :
    this.allCalculationData.resNameALength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.ELLIPSE)) ?
     'first semi-axis' :
    this.allCalculationData.resNameALength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.CIRCLE
      || this.allCalculationData.shape === this.SPHERE)) ? 'radius' :
    this.allCalculationData.resNameALength;

    this.allCalculationData.resNameALength = ((screen.width < 1200) && (this.allCalculationData.shape === this.TRIANGLE
      || this.allCalculationData.shape === this.SQUARE || this.allCalculationData.shape === this.CUBE)) ? 'sl' :
    this.allCalculationData.resNameALength = ((screen.width < 1200) && (this.allCalculationData.shape === this.RECTANGLE
      || this.allCalculationData.shape === this.CUBOID)) ? 'fsl' :
    this.allCalculationData.resNameALength = ((screen.width < 1200) && (this.allCalculationData.shape === this.ELLIPSE)) ? 'fsa' :
    this.allCalculationData.resNameALength = ((screen.width < 1200) && (this.allCalculationData.shape === this.CIRCLE
      || this.allCalculationData.shape === this.SPHERE)) ? 'r' :
    this.allCalculationData.resNameALength;
  }

  private resNameB(): void {
    this.allCalculationData.resNameBLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.PERIMETER
      && this.allCalculationData.checkTriangle === false)) ? 'second side length' :
    this.allCalculationData.resNameBLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.AREA
      && this.allCalculationData.checkTriangle === false)) ? 'height' :
    this.allCalculationData.resNameBLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.SQUARE
      || this.allCalculationData.shape === this.CUBE)) ? '' :
    this.allCalculationData.resNameBLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.RECTANGLE
      || this.allCalculationData.shape === this.CUBOID)) ? 'second side length' :
    this.allCalculationData.resNameBLength = ((screen.width >= 1200)
      && (this.allCalculationData.shape === this.ELLIPSE)) ? 'second semi-axis' :
    this.allCalculationData.resNameBLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.CIRCLE)) ? '' :
    this.allCalculationData.resNameBLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.CUBE)) ?
     'second side length' : this.allCalculationData.resNameBLength;

    this.allCalculationData.resNameBLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.PERIMETER
      && this.allCalculationData.checkTriangle === false)) ? 'ssl' :
    this.allCalculationData.resNameBLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.AREA
      && this.allCalculationData.checkTriangle === false)) ? 'h' :
    this.allCalculationData.resNameBLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.SQUARE
      || this.allCalculationData.shape === this.CUBE)) ? '' :
    this.allCalculationData.resNameBLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.RECTANGLE
      || this.allCalculationData.shape === this.CUBOID)) ? 'ssl' :
    this.allCalculationData.resNameBLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.ELLIPSE)) ? 'ssa' :
    this.allCalculationData.resNameBLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.CIRCLE)) ? '' :
    this.allCalculationData.resNameBLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.CUBE)) ? 'ssl' :
    this.allCalculationData.resNameBLength;
  }

  private resNameC(): void {
    this.allCalculationData.resNameCLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.PERIMETER
      && this.allCalculationData.checkTriangle === false)) ? 'third side length' :
    this.allCalculationData.resNameCLength = ((screen.width >= 1200) && (this.allCalculationData.shape === this.CUBOID)) ? 'height' :
    this.allCalculationData.resNameCLength;

    this.allCalculationData.resNameCLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.TRIANGLE
      && this.allCalculationData.calculationType === this.PERIMETER
      && this.allCalculationData.checkTriangle === false)) ? 'tsl' :
    this.allCalculationData.resNameCLength = ((screen.width < 1200) && (this.allCalculationData.shape === this.CUBOID)) ? 'h' :
    this.allCalculationData.resNameCLength;
  }

}
