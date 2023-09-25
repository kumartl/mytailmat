import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { NewthreeComponent } from './newthree/newthree.component';
import { HeadertwoComponent } from './headertwo/headertwo.component';

const routes: Routes = [
  {
    path:'new',
    component:NewComponent
  },
  {
    path:'newtwo',
    component:NewtwoComponent
  },
  {
    path:'',
    component:NewthreeComponent
  },
  {
    path:'three',
    component:NewthreeComponent
  },
  {
    path:'headertwo',
    component:HeadertwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
