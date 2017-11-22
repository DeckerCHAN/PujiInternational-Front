import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrimaryComponent} from './primary.component';
import {ArticleComponent} from './article.component';

const routes: Routes = [
  {path: '', redirectTo: '/primary', pathMatch: 'full'},
  {path: 'primary', component: PrimaryComponent},
  {path: 'article', component: ArticleComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
