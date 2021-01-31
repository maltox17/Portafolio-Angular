import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/create/create.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
*/

/*const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'crear-proyecto', component: CreateComponent},
  {path: 'contacto', component: ContactComponent},
  {path: '**', component: ErrorComponent}
];*/

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})


export class AppRoutingModule { }
