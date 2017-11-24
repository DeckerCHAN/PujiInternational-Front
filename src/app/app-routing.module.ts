import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryComponent } from './primary.component';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/primary', pathMatch: 'full'},
  {path: 'primary', component: PrimaryComponent},
  {path: 'articles', component: ArticleListComponent},
  {path: 'article/:id', component: ArticleComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
