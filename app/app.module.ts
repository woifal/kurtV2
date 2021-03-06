import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent }  from './app.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { routing, appRoutingProviders } from './app.routing';

import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('app-toolbar'),
    PolymerElement('paper-icon-button'),
	PolymerElement('paper-drawer-panel'),
	PolymerElement('paper-menu'),

	PolymerElement('paper-button'),
	PolymerElement('iron-icon'),
	

	PolymerElement('paper-item'),
	PolymerElement('paper-listbox'),
	PolymerElement('paper-submenu'),
	//PolymerElement('paper-menu-shared-styles'),
	HeroesComponent,
    PolymerElement('vaadin-grid'),
    HeroDetailComponent,
    PolymerElement('paper-input'),
    PolymerElement('vaadin-date-picker')
	,LoginComponent
  ],
  providers: [
    HeroService,
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
