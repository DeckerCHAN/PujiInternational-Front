import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryComponent } from './pages/primary.component';
import { ArticleComponent } from './pages/article.component';
import { ArticleListComponent } from './pages/article-list.component';
import { WelcomeComponent } from './pages/welcome.component';
import {RegionComponent} from "./pages/region.component";

const routes: Routes = [
  {path: '', redirectTo: '/primary', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'primary', component: PrimaryComponent},
  {path: 'articles', component: ArticleListComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'region/:id', component: RegionComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
