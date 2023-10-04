import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"home", component : HomeComponent},
  {path:"products",component:ProductComponent,
   data: {key1:'value1',key2:'value2'}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
