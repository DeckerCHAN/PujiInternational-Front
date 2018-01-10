import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SlideItemsService } from './services/slide-items.service';
import { AppRoutingModule } from './app-routing.module';
import { PrimaryComponent } from './pages/primary.component';
import { ArticleComponent } from './pages/article.component';
import { ArticleService } from './services/articles.service';
import { HeaderComponent } from './page-controls/header.component';
import { NavigatorComponent } from './page-controls/navigator.component';
import { ArticleListComponent } from './pages/article-list.component';
import { FooterComponent } from './page-controls/footer.component';
import { WelcomeComponent } from './pages/welcome.component';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import {RegionComponent} from './pages/region.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PrimaryComponent,
    NavigatorComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArticleListComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  providers: [SlideItemsService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
