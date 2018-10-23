import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LOGIN_ROUTES } from './views/login/login.routes';
import {MAIN_ROUTES} from './views/main/main.routes'

const routes: Routes = [
    // Your routes here
    ...LOGIN_ROUTES,
    ...MAIN_ROUTES
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
// ng g c views/login --module app