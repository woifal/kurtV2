import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-app',
  template: `
  <paper-drawer-panel>
	  <div drawer> 	  
<paper-menu>
	<paper-item>
		<paper-button>
  <iron-icon icon="home"></iron-icon>
  HOME
</paper-button>
	</paper-item>
  <paper-submenu>
    <paper-item class="menu-trigger">Topics</paper-item>
    <paper-menu class="menu-content">
      <paper-item>Topic 1</paper-item>
      <paper-item>Topic 2</paper-item>
      <paper-item>Topic 3</paper-item>
    </paper-menu>
  </paper-submenu>
  <paper-submenu>
    <paper-item class="menu-trigger">Faves</paper-item>
    <paper-menu class="menu-content">
      <paper-item>Fave 1</paper-item>
      <paper-item>Fave 2</paper-item>
    </paper-menu>
  </paper-submenu>
  <paper-submenu disabled>
    <paper-item class="menu-trigger">Unavailable</paper-item>
    <paper-menu class="menu-content">
      <paper-item>Disabled 1</paper-item>
      <paper-item>Disabled 2</paper-item>
    </paper-menu>
  </paper-submenu>
</paper-menu>
	  </div>
	  <div main> 
        <app-header-layout has-scrolling-region>
		  <app-header fixed>
			<app-toolbar [class.raised]="isInChildView">
			  <paper-icon-button icon="arrow-back" *ngIf="isInChildView" (click)="goBack()"></paper-icon-button>
			  <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
			  <div title spacer>{{title}}</div>
			</app-toolbar>
		  </app-header>
		  <router-outlet></router-outlet>
		</app-header-layout>
	  </div>
  </paper-drawer-panel>
  `,
  styles: [`
  
	paper-button {
		padding-left: 0px;
	}
	iron-icon {
		padding-left: 0px !important;
		padding-right: 15px;
		border: 0px solid red;
	}
  
  /* Make all toolbar titles in this host green by default */
      paper-menu {
        --paper-menu-background-color: #5f71d5;
		--paper-menu-color: #eeeeee;
	  }
	div>paper-menu {
		border-right: 1px solid #CCCCCC;
	}
  
  
	paper-menu paper-menu {
		margin-left: 50px;
        --asdfpaper-menu-background-color: red; /*#3f51b5;*/
      --asdfpaper-menu-color: red;
	  }
	  
	div>paper-menu paper-item {
		border-top: 1px solid #AAAAAA;
	}
  
    app-toolbar {
      background: var(--primary-color);
      color: var(--dark-theme-text-color);
    }

    app-toolbar.raised {
      @apply(--shadow-elevation-4dp);
    }

    paper-icon-button {
      position: absolute;
      top: 12px;
      left: 8px;
    }
  `]
})
export class AppComponent implements OnInit {
  title = '';
  isInChildView = false;
  private _routerSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this._routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let route = this._route.snapshot;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.title = route.data['title'];
        this.isInChildView = !route.data['root'];
      }
    });
  }

  ngOnDestroy() {
    this._routerSubscription.unsubscribe();
  }

  goBack() {
    this._router.navigate(['/heroes']);
  }
}
