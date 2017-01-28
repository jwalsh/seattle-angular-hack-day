import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnChanges() {
        console.log('ngOnChanges: Respond after Angular sets a data-bound input property. The method receives a changes object of current and previous values.');
    }

    ngOnInit() {
        console.log('ngOnInit: Initialize the directive/component after Angular initializes the data-bound input properties.');
    }

    ngDoCheck() {
        console.log('ngDoCheck: Detect and act upon changes that Angular can or won’t detect on its own. Called every change detection run.');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit: After Angular projects external content into its view.');
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked: After Angular checks the bindings of the external content that it projected into its view.');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit: After Angular creates the component\’s view(s).');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked: After Angular checks the bindings of the component’s view(s).');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy: Just before Angular destroys the directive/component.');
    }

}
