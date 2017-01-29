import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NullComponent } from './null/null.component';
import { PuppyComponent } from './puppy.component';
import { KittenComponent } from './kitten/kitten.component';
import { PetsModule } from './pets/pets.module';
import { PeopleService } from './people.service';

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
        NullComponent,
        PuppyComponent,
        KittenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
