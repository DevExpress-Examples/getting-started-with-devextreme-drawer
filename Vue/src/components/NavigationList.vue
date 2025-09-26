<template>
    <DxList
        :width="200"
        selection-mode="single"
        :items="navigation"
        item-template="links"
        @selection-changed="navigate">
        <template #links="{ data }">
            <div>
                <router-link :to="'/' + data.path">
                    <div>
                        <div class="dx-list-item-icon-container">
                            <i class="dx-icon dx-list-item-icon" :class="'dx-icon-' + data.icon"></i>
                        </div>
                        <span>{{ data.text }}</span>
                    </div>
                </router-link>
            </div>
        </template>
    </DxList>
</template>
<script>
import { DxList } from "devextreme-vue/list";

export default {
    components: {
        DxList
    },
    data() {
        const navigation = [
            { id: 1, text: "Inbox", icon: "message", path: "inbox-item" },
            { id: 2, text: "Sent Mail", icon: "check", path: "sent-mail" },
            { id: 3, text: "Trash", icon: "trash", path: "trash-item" },
            { id: 4, text: "Spam", icon: "mention", path: "spam-item" }
        ];
        return {
            navigation
        };
    },
    methods: {
        navigate() {
            this.$emit('navigated');
        }
    }
}
</script>