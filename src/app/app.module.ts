import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SMNUIModule } from 'ng-smn-ui';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared.module';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    SMNUIModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
