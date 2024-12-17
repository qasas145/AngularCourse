import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path : "auth",
    loadChildren : ()=>
      import("./auth/auth/auth.module").then((module)=>module.AuthModule),
    
  },
  {path : "about", component : AboutComponent,},
  {path : "navbar", component : NavbarComponent},
  {path : "parent", component : ParentComponent},
  {path : "child", component : ChildComponent},
  {path : "posts", component : PostsComponent},
  {path :"products", component : ProductsComponent, canActivate :[authGuard]},
  {path : "products/:id", component : ProductDetailsComponent, canActivate : [authGuard]},
  {path : "**", redirectTo : "parent"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration : 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
