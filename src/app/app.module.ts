import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacesPage } from '../pages/places/places';
import { GalleryService } from './services/gallery.service';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { placesService } from './services/places.service';
import { NewPlacePage } from '../pages/new-place/new-place';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailPlacePage } from '../pages/detail-place/detail-place';
import { AgmCoreModule } from '@agm/core';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    HomePage, GalleryPage, MeteoPage, PlacesPage, DetailImagePage, NewPlacePage, DetailPlacePage
  ],
  imports: [
    BrowserModule,HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyn5ziWDi7Jfx-vrfj04djEAjWEWL-QRU'
    }),
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot({
      name: '__PlacesData',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, GalleryPage, MeteoPage, PlacesPage, DetailImagePage, NewPlacePage, DetailPlacePage
  ],
  providers: [
    StatusBar,GalleryService,placesService,Geolocation,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
