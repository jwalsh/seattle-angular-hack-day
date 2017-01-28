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
