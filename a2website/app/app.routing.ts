import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/Home/home.component";

const appRoute: Routes = [
    {
        path: '',
        component: HomeComponent
    },
]