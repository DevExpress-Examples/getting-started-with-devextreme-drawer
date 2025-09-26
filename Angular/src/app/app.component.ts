import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'getting-started-with-drawer';
    navigation: any[] = [
        { id: 1, text: "Inbox", icon: "message", path: "inbox" },
        { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
        { id: 3, text: "Trash", icon: "trash", path: "trash" },
        { id: 4, text: "Spam", icon: "mention", path: "spam" }
    ];
    isDrawerOpen: boolean = true;
    buttonOptions: any = {
        icon: "menu",
        onClick: () => {
            this.isDrawerOpen = !this.isDrawerOpen;
        }
    }
}