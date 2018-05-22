import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { StickyFooterComponent } from './pages/shared/sticky-footer/sticky-footer.component';
import { LoginComponent } from './pages/public/login/login.component';
import { HomeComponent } from './pages/public/home/home.component';
import { SearchComponent } from './pages/public/search/search.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListDisplayComponent } from './pages/shared/list-display/list-display.component';
import { ShowImagePipe } from './pipes/show-image.pipe';
import { ShowComponent } from './pages/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StickyFooterComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    NotFoundComponent,
    ListDisplayComponent,
    ShowImagePipe,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
