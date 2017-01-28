# seattle-angular-hack-day

## Introduction 

http://goo.gl/dfG3hX

- Angular 2 vs. Angular 1
- based on the 2 day introduction provided at Google 
- new release process for 6 month releases with deprecation notices 
- application example: YouTube player 

https://github.com/mgiambalvo/demo-youtube-player

- structure: components are like directives 
- component: view, component class, styles 
- appliation is a tree of components 
- Directives are a superclass of Components 
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

## Resources 

- https://vsavkin.com/

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
```

1. Validate scaffolding
2. Define the routes: /search, /upload
3. Define the components: 
