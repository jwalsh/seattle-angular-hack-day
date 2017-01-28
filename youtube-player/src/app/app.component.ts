import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { PeopleService } from 'people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    people$: Observable<any>;

    title = 'YouTube Player';
    description = 'Demo application for Seattle Angular Hack Day.';
    constructor() {

    }

    getPeople() {
        return [];
    }
}
