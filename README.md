# MyNgApp

## Svelete integration information:
We have made config entry as `kit.paths.base: "/s"` in svelte.config.js directory.
Do `npm install` in both projects(angular and svelte).
To build full run `npm run build-full` from angular project
It will build both projects and will copy Svlete build folder to anugular dist folder using script `scripts full-build.mjs`
Serve local folder using any static server e.g. `http-server dist\my-ng-app`

Below are details for angular project.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

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
