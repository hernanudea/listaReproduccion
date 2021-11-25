import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/share/navbar/navbar.component';
import {FooterComponent} from './components/share/footer/footer.component';

import {AppRoutingModule, routingComponents} from './app-routing-module';

import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/share/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
