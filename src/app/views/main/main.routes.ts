import {Routes} from '@angular/router';
import { MainComponent } from './main.component';


export const MAIN_ROUTES: Routes = [
    // Your routes here
    {
        path: 'main-chat/:lg/:nick',
        component: MainComponent
    }
];