import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "about", component : AboutComponent,},
  {path : "navbar", component : NavbarComponent},
  {path : "parent", component : ParentComponent},
  {path : "child", component : ChildComponent},
  {path : "posts", component : PostsComponent},
  {path : "login", component : LoginComponent},
  {path : "**", redirectTo : "parent"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration : 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
