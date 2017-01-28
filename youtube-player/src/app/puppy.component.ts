import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-puppy',
    template: '<b>Puppies!</b>'
})
export class PuppyComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log('Puppies!')
    }

    save() {

    }

}
