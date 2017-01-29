import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { PeopleService } from 'people.service';
import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    people$: Observable<any>;
    videos: Observable<any>;

    title = 'YouTube Player';
    description = 'Demo application for Seattle Angular Hack Day.';
    constructor(private http: Http) {

    }

    getPeople() {
        return this.http.get(`http://swapi.co/api/people/`)
            .subscribe(people => console.log(people));
    }

    getVideos() {
        return this.videos;
    }

    search() {
        return [];
    }
}
