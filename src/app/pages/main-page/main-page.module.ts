import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';

import { GoogleMapComponent } from './components/google-map/google-map.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { FacebookCommentsComponent } from './components/facebook-comments/facebook-comments.component';
import { FaqComponent } from './components/faq/faq.component';
import { HeartBeatComponent } from './components/heart-beat/heart-beat.component';

import { WindowService } from '../../shared/services/window/window.service';

import { MainPageComponent } from './main-page.component';

const routes: Routes = [
  {
    path: 'info/:language',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxGalleryModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GoogleMapComponent,
    CountDownComponent,
    FacebookCommentsComponent,
    FaqComponent,
    HeartBeatComponent,
    MainPageComponent
  ],
  providers: [
    WindowService
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule {}
