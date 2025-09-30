import React, { useState, useMemo, useCallback } from "react";
import NavigationList from "./NavigationList";
import Inbox from "../views/Inbox";
import Trash from "../views/Trash";
import SentMail from "../views/SentMail";
import Spam from "../views/Spam";
import "devextreme/dist/css/dx.light.css";
import "./NavigationDrawer.css";
import { Routes, Route } from 'react-router-dom'; 
import { Drawer } from "devextreme-react/drawer";
import { Toolbar, Item } from "devextreme-react/toolbar";

function NavigationDrawer() {
    const [isOpened, setState] = useState(false);
    const buttonOptions = useMemo(() => {
        return {
            icon: "menu",
            onClick: () => {
                setState(!isOpened );
            }
        };
    }, [isOpened]);

    const renderList = useCallback(() => {
        const stateHandler = (newState) => setState(newState);
        return (
            <NavigationList stateHandler={stateHandler} />
        );
    }, []);

        return (
            <div>
                <Toolbar id="toolbar">
                    <Item
                        widget="dxButton"
                        options={buttonOptions}
                        location="before"
                    />
                </Toolbar>
                <Drawer
                    revealMode="expand"
                    height={250}
                    openedStateMode="overlap"
                    minSize={37}
                    render={renderList}
                    opened={isOpened}
                >   
                    <div id="view">
                        <Routes>
                            <Route exact path="views/inbox" element={<Inbox />} />
                            <Route path="views/sent-mail" element={<SentMail />} />
                            <Route path="views/spam" element={<Spam />} />
                            <Route path="views/trash" element={<Trash />} />
                        </Routes>
                    </div>
                </Drawer>
            </div>
        );
}

export default NavigationDrawer;