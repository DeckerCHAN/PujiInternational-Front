import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SlideItemsService } from './services/slide-items.service';
import { AppRoutingModule } from './app-routing.module';
import { PrimaryComponent } from './primary.component';
import { ArticleComponent } from './article.component';
import { ArticleService } from './services/articles.service';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SlideItemsService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
