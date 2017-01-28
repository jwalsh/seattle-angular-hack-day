# seattle-angular-hack-day

## Introduction 

http://goo.gl/dfG3hX

- Angular 2 vs. Angular 1
- based on the 2 day introduction provided at Google 
- new release process for 6 month releases with deprecation notices 
- application example: YouTube player 
- Don't use the nomenclature 
- Branding: http://angularjs.blogspot.com/2017/01/branding-guidelines-for-angular-and.html

https://github.com/mgiambalvo/demo-youtube-player

- structure: components are like directives 
- component: view, component class, styles 
- appliation is a tree of components 
- Directives are a superclass of Components 
- `ng generate component foo`
- Application -> { NgModule ->  { Components* }}
- platformBrowserDynamic used for bootstrapping 
- Property binding uses <b [name]="person.name"...> and is one-way
- Shortcut properties like [class.hidden] or [style.width.px]
- Into component through properties, out through events (vs. @ContentChildrent of [(ngModel)])
- Events signaled in (click) or (keydown.control.enter)
- HTML elements can be specified as #userName 
- Structural directives specified as *ngIf 
- ngRepeat in Angular 4 like *ngFor="let player of team.roster" with ES6 syntax
- Services for dependency injection to help with testing
- constructors can use public with named 
- @Injectable annotion used for DI 
- @NgModule consumes array of provides from imports 
- consuming just is adding as a parameter to the constructor (as noted above)
- Injectable components are available in all of namespace 
- TODO: review the passing of data from parent to child: template [data] to template *ngFor via @Input data
- Passing data from chile to parent is with (updated) via @Output() updated
- @Output foo: new EventEmitter<FooEvent>()
- Testing is provided through Jasmine with describe()
- core/test provides asyncTest and TestBed with configureTestingModule with declarations
- fixtures from createComponent
- Pipes as a filter in *ngFor "let player of (team.roster | isInjured)"
- built-in pipes: async, date, and json
- custom pipes PipeTransform: reqires transform method in interface
- Content Projection: views vs. content via ng-content as transclude
- TODO: review content projection 
- Logging data values in constructor will not work since it is very early in the lifecyle of the component 
- TODO: Review the lifecyle hooks: http://myrighttocode.org/blog/typescript/angular2/angular-2-lifecycle
- Change detection from https://github.com/angular/zone.js
- routeLink via `app-routes.module.ts`
- ngModules create Form objects with ngModelGroup for hierarchy
- @ViewChild(NgForm): http://stackoverflow.com/questions/37093432/angular-2-template-driven-form-access-ngform-in-component

## Workflow

1. Define the core routes
2. Define the structure of the application compnents 
3. Prepare scaffolding of html
4. Apply logging for initialization of compnent via module import
5. Prepare environments 
6. Sample creating new views with components and routing
7. Create sample tests for any new component with route

# Working 

## Resources 

- https://vsavkin.com/
- https://angular.io/docs/ts/latest/tutorial/
- https://github.com/angular/material2/blob/master/guides/getting-started.md

## TODO 

- Functional TypeScript: https://vsavkin.com/functional-typescript-316f0e003dc6#.ekn4cqrpz
- ng serve: https://github.com/angular/angular-cli/issues/4264
- `npm install extract-text-webpack-plugin@2.0.0-rc.0 --save-dev`

## YouTube Demo

### Review the demo application 

```
git clone git@github.com:mgiambalvo/demo-youtube-player.git
npm install 
npm install extract-text-webpack-plugin@2.0.0-rc.0 --save-dev
ng serve 
```

### Building the Demo

```
cd seattle-angular-hack-day
ng new youtube-player
cd youtube-player
ng serve 
ng e2e
ng test 
```

1. Validate scaffolding: application and tests
2. Define the routes: /search, /upload
3. Define the components: index, search, uploads
4. Apply initial styling
5. Create header: `ng generate component header`
6. Create mock routes for login and logout

### Adding Design 

https://material.angular.io/guide/getting-started

- Update to use Material from NPM: `npm install @angular/material --save` 

### Performance Tuning 

- TODO: https://www.npmjs.com/package/source-map-explorer

# Presentations 

## Why Angular 2

- look at where Angular 1 applications were failing 
- AOT (Ahead of Time) compiliation vs. JIT 
- JIT: load document, template parsing, compling, angular tick 
- updates for the modern web: ES2015+ 
- components and classes use current class 
- bundlers for providing namespaced code via `import { FooBar } from 'foo'`
- As of September 2016: Angular 1 was double the size of Angular 2 (1.2M vs. .6M)

Questions: 

- terminology is similar to React via compponents 
- TODO: performance through some analysis of the dependencies using https://www.npmjs.com/package/source-map-explorer

```
source-map-explorer bundle.min.js
```

- TODO: https://angular.io/docs/ts/latest/guide/upgrade.html

## RxJS with Angular (vs. AngularJS)

https://xgrommx.github.io/rx-book/

- Values that come back over time 
- Observable
- HTTP gets are now Observables
- FormContol.valuesChanges are Observables 
- `route.params` are Observables 
- See also 

## AngularFire 

https://github.com/duncanhunter/angularhackday-seattle2017-rxjs
https://goo.gl/wrAQcW
https://github.com/cnishina/angular-hack-day-puppy-example

- See the examples for reading and writing lists 

https://github.com/cnishina/angular-hack-day-puppy-example/commit/f8297065d20716bacfacb39dd496cbb5d152fe4b

## Angular Material 

https://github.com/duncanhunter/angularhackday-seattle2017-angularmaterial2

- Use the new location 
- Still in Beta
- Also https://github.com/angular/flex-layout

- md-sidenav-container > md-sidenav > md-nav-list > md-list-item
- fxLayoutAlign
- Fairly declarative approach for looking at media queries associated with the layouts 
