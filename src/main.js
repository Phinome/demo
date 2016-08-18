import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Editor from './Editor.vue';

Vue.use(VueRouter);
// create a router instance
// you can pass in additional options here, but
// let's keep it simple for now.
var router = new VueRouter();

// define some routes.
// each route should map to a component.
// we'll talk about nested routes later.
router.map({
    '/editor': {
        component: Editor
    }
});

// now we can start the app!
// router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, 'app');
