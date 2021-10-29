import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { ShopComponent } from './shop/shop.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'joinnow',component:JoinnowComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'feedback',component:FeedbackComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'tool', component:ToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
