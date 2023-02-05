import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Tienda1Component } from './components/tienda1/tienda1.component';
import { Tienda2Component } from './components/tienda2/tienda2.component';

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'perros', component:Tienda1Component},
    {path: 'gatos', component:Tienda2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
