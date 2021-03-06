import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LinkListComponent } from './link-list/link-list.component';
import { IdleAdsComponent } from './idle-ads/idle-ads.component';
import { IdleAdComponent } from './idle-ad/idle-ad.component';
import { KioskService } from './services/kiosk.service';
import { HttpClientModule } from '@angular/common/http';
import { SystemAdminComponent } from './system-admin/system-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes = [
  { path: '',
    redirectTo: '/link-list',
    pathMatch: 'full'
  },
  { path: 'link-list', component: LinkListComponent },
  { path: 'idle-ads', component: IdleAdsComponent },
  { path: 'idle-ads/:id', component: IdleAdComponent },
  { path: 'system-admin', component: SystemAdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LinkListComponent,
    IdleAdsComponent,
    IdleAdComponent,
    SystemAdminComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [KioskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
