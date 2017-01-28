import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NullComponent } from './null/null.component';
// import { PeopleService } from './people.service';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'search',
        component: NullComponent
    },
    {
        path: 'upload',
        component: NullComponent
    }

];


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent,
        NullComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
