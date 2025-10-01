import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFormModule,
    DxCheckBoxModule,
    DxTextAreaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
