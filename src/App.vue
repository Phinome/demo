<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <p>
            <!-- use v-link directive for navigation. -->
            <a v-link="{ path: '/editor' }">Go to Foo</a>
            <a v-link="{ path: '/bar' }">Go to Bar</a>
        </p>
        <!-- use router-view element as route outlet -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                msg: 'UEditor for Vue'
            }
        }
    }
</script>

<style>
    body {
        font-family: Helvetica, sans-serif;
    }
</style>
