import { Component } from '@angular/core';

@Component({
  selector: 'person',
  template: '<h2 [title="person.name"]>Profile for {{person.name}}</h2>',
})
export class AppComponent {
    person: Person = {
        name: 'Alice'
    };
}
