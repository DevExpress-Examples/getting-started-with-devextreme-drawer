<template>
    <div id="app">
        <DxToolbar id="toolbar">
            <DxItem
                widget="dxButton"
                :options="buttonOptions"
                location="before"
            />
        </DxToolbar>
        <DxDrawer
            opened-state-mode="overlap"
            reveal-mode="expand"
            v-model:opened="isDrawerOpen"
            :minSize="37"
            :height="250"
            template="list"
        >
            <template #list>
                <NavigationList
                    @navigated="isDrawerOpen = false"
                />
            </template>
            <div id="view">
                <router-view></router-view>
            </div>
        </DxDrawer>
    </div>
</template>

<script>
import DxDrawer from 'devextreme-vue/drawer';
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';

import NavigationList from './components/NavigationList.vue';

export default {
    components: {
        DxDrawer,
        DxToolbar,
        DxItem,
        NavigationList
    },
    data() {
        return {
            buttonOptions: {
                icon: "menu",
                onClick: () => {
                    this.isDrawerOpen = !this.isDrawerOpen;
                }
            },
            isDrawerOpen: false
        };
    }
};
</script>

<style>
.dx-overlay-content {
    background-color: lightgray;
}
#view {
    margin-left: 10px;
    margin-top: 10px;
}
#toolbar {
    background-color: rgba(191, 191, 191, 0.15);
    padding: 5px 10px;
}
.dx-toolbar-button .dx-button {
    background-color: rgba(191, 191, 191, -0.15);
    border: none;
}
.dx-toolbar-button > .dx-toolbar-item-content {
    margin-left: -7px;
}
.dx-list-item-icon {
    margin-right: 10px;
}
</style>