import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { StickyFooterComponent } from './pages/shared/sticky-footer/sticky-footer.component';
import { LoginComponent } from './pages/public/login/login.component';
import { HomeComponent } from './pages/public/home/home.component';
import { NotFoundComponent } from './pages/public/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import { ListDisplayComponent } from './pages/shared/list-display/list-display.component';
import { ShowImagePipe } from './pipes/show-image.pipe';
import { GalleryComponent } from './pages/public/home/gallery.component';
import { LittleInfoComponent } from './pages/public/home/little-info.component';
import { ListComponent } from './pages/public/list/list.component';
import { ShowComponent } from './pages/public/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StickyFooterComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ListDisplayComponent,
    ShowImagePipe,
    ShowComponent,
    GalleryComponent,
    LittleInfoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
