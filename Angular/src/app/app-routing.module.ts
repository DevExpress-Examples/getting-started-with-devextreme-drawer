import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InboxComponent } from "./views/inbox.component";
import { SentMailComponent } from "./views/sent-mail.component";
import { TrashComponent } from "./views/trash.component";
import { SpamComponent } from "./views/spam.component";

const routes: Routes = [
    { path: '', redirectTo: '/inbox', pathMatch: 'full' },
    { path: 'inbox', component: InboxComponent },
    { path: 'sent-mail', component: SentMailComponent },
    { path: 'trash', component: TrashComponent },
    { path: 'spam', component: SpamComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
    declarations: [
        InboxComponent,
        SentMailComponent,
        TrashComponent,
        SpamComponent
    ]
})
export class AppRoutingModule { }