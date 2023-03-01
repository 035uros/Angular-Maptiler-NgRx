# MapApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Overview

App starts with map and 5 preloaded pins of the Faculties from University of Kragujevac.

![main](https://raw.githubusercontent.com/035uros/Angular-Maptiler-NgRx/main/imgs/1.PNG)

Controls in top-right corner are used for navigation(zoom in, zoom out, rotate).

By clicking on the pin pop-up message appear and application zoom in on clicked pin.

![pin](https://raw.githubusercontent.com/035uros/Angular-Maptiler-NgRx/main/imgs/2.PNG)

All pins are dragable and adjustable. Clicking on CENTER button application will find mean of all pins and place the view in middle of them.

## Maptiler API

The MapTiler Server API allows you to programmatically access all the data, maps, and resources in the MapTiler Server. Through the API, you can add a map directly to your website, request map tiles, create an image with a location map for your business, and more.

In order to use my code you will just need to replace string `'your key'` with your API key. String is located in `src/enviroments/enviroment.ts`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
