import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';

@NgModule({

  imports: [

    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MaterialModule{ }
