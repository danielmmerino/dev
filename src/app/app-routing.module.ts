import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaCharactersComponent } from './vista-characters/vista-characters.component';

const routes: Routes = [
{path: "",
component: VistaCharactersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
