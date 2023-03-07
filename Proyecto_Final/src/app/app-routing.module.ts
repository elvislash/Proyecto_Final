import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(routes), HeaderComponent ],
  exports: [ RouterModule ],
  declarations: [ HeaderComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
