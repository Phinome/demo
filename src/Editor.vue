<template>
    <div v-ueditor="content" :config="conf"></div>
</template>
<style>
</style>
<script>
    import Vue from 'vue';

    Vue.directive('ueditor', {
        params: ['config'],
        twoWay: true,
        bind: function () {
            var self = this;
            this.el.id = 'ueditor_demo';
            this.editor = UE.getEditor(this.el.id, this.params.config)
            this.editor.ready(function () {
                self.editorReady = true
                self.editor.addListener("contentChange", function () {
                    self.set(self.editor.getContent())
                })
                self.update(self.vm.$get(self.expression))
            })
        },
        update: function (newValue, oldValue) {
            if (this.editorReady) {
                this.editor.setContent(newValue)
            }
        },
        unbind: function () {
            this.editor.destroy()
        }
    })
    export default{
        props: {
            config: {
                type: Object,
                default: null
            },
            content: String
        },
        init() {}
    }
</script>
