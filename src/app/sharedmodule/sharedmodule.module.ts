import { MenuComponentComponent } from './../myComponents/menu-component/menu-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [MenuComponentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[MenuComponentComponent]
})
export class SharedmoduleModule { }
