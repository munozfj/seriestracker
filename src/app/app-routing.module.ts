import { ListComponent } from './pages/public/list/list.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { LoginComponent } from './pages/public/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { ShowComponent } from './pages/public/show/show.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list/:base/:query', component: ListComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
