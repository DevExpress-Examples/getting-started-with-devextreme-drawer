$(function() {
    $("#view").load( "./pages/inbox.html" );

    $("#toolbar").dxToolbar({
        items: [{
            widget: "dxButton",
            location: "before",
            options: {
                icon: "menu",
                onClick: function() {
                    drawer.toggle();
                }
            }
        }]
    });

    const drawer = $("#drawer").dxDrawer({
        minSize: 37,
        height: 250,
        revealMode: "expand",
        openedStateMode: "overlap",
        template: function() {
            const $list = $("<div/>").dxList({
                items: [
                    { id: 1, text: "Inbox", icon: "message", filePath: "inbox" },
                    { id: 2, text: "Sent Mail", icon: "check", filePath: "sent-mail" },
                    { id: 3, text: "Trash", icon: "trash", filePath: "trash" },
                    { id: 4, text: "Spam", icon: "mention", filePath: "spam" }
                ],
                width: 200,
                height: 200,
                selectionMode: "single",
                onSelectionChanged: function(e) {
                    $("#view").load( "./pages/" + e.addedItems[0].filePath + ".html" );
                    drawer.hide();
                }
            });
            return $list;
        }
    }).dxDrawer("instance");
});