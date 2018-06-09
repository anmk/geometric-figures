# Geometric figures

A production version can be tried at the following link: [Geometric figures](http://gf.kalowski.com)

## Introduction

The application can calculate perimeters, areas and volumes of some 2D and 3D geometric shapes. The project was built in Angular v6.0.2 using component inheritance. In addition, I used Node.js v10.1.0 and Bootstrap v4.1.1. Various types of reactive forms have been placed in the application: tekstarea, checkbox, radio and select. For communication, I deliberately used various methods of both Input, Output, projection with ng-content and RxJS. 

To calculate the ellipse's circumference was used an approximation of the Ramanujan, an Indian mathematician.
Source: [Circuit of the ellipse](https://www.mathsisfun.com/geometry/ellipse-perimeter.html) (Approximation 3)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Some screenshots of the application

### :iphone: Mobile devices:

**The most important views on your smartphone.**

*Home, example of data entry, validation and result.*
![mobile1](https://user-images.githubusercontent.com/5839775/41192138-edacf30e-6bf9-11e8-884b-42063684a10b.jpg)

*An example of calculating the circuit of an ellipse.*
![mobile2](https://user-images.githubusercontent.com/5839775/41192333-618c18d4-6bfc-11e8-8d3f-4b41fe62c1c0.jpg)

*An example of the different number of form fields displayed for sphere and cuboid.*
![mobile3](https://user-images.githubusercontent.com/5839775/41192341-74bee738-6bfc-11e8-9ea3-92a6b29d6bd4.jpg)

### :computer: Desktop: 

**Different views from the desktop.**

*Validation during data selection.*
![desktop1](https://user-images.githubusercontent.com/5839775/41192384-26e5a316-6bfd-11e8-834e-79d695139e90.jpg)

*Selection and input of data.*
![desktop2](https://user-images.githubusercontent.com/5839775/41192393-47441912-6bfd-11e8-8bab-5ecca9c0cacb.jpg)

*The names of entered values and validation on the example of cuboid.*
![desktop3](https://user-images.githubusercontent.com/5839775/41192395-543ca3d2-6bfd-11e8-812d-b854a0ba8bb1.jpg)

*Different number of form fields displayed for different triangles.*
![desktop4](https://user-images.githubusercontent.com/5839775/41192399-617318ec-6bfd-11e8-8485-874650c5bbb7.jpg)

*Triangle area before data entry and triangle perimeter after entering data.*
![desktop5](https://user-images.githubusercontent.com/5839775/41192404-6bdee946-6bfd-11e8-81c0-179005986581.jpg)

*Data entry and result for an ellipse.*
![desktop6](https://user-images.githubusercontent.com/5839775/41192407-7817a1f8-6bfd-11e8-8bf9-c2e3a08c5064.jpg)

*Result view with all entered data for the triangle and cuboid.*
![mobile7](https://user-images.githubusercontent.com/5839775/41192411-81e4754e-6bfd-11e8-890f-31bff94bfd4c.jpg)
