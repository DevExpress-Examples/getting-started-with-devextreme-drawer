import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { DxListModule } from "devextreme-angular/ui/list";
import { DxToolbarModule } from "devextreme-angular/ui/toolbar";
import { DxDrawerModule } from "devextreme-angular/ui/drawer";
import { DxButtonModule } from "devextreme-angular/ui/button";
import { DxTemplateModule } from "devextreme-angular/core";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DxDrawerModule,
        DxToolbarModule,
        DxListModule,
        DxButtonModule,
        DxTemplateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }