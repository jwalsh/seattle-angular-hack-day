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
- Into component through attributes, out through events 
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
