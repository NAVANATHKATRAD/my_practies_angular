import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

const routes: routes = [
  { path : '' , component : HomeComponent},
  { path : "login" , component : LoginComponent},
  { path : "signUp" , component : Sign-UpComponent},
  { path : "dataBinding", component: DatabindingComponent},
  { path : "directives", component: DirectivesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
