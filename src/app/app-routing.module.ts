import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/forma/form.component';
import { StartComponent } from './components/starta/start.component';

const ROUTES: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'test',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
