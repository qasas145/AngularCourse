import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent,
    PostsComponent,
    LoginComponent,
    ProductsComponent,
    SearchProductPipe,
    ProductDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoaderInterceptor,
      multi : true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
