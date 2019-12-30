import Vue from 'vue'
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue'
import { InertiaApp } from '@inertiajs/inertia-vue'

Vue.use(InertiaApp)
Vue.use(VueMeta)
Vue.use(PortalVue)
Vue.mixin({methods: {route: window.route}})

const app = document.getElementById('app')

new Vue({
  metaInfo: {
    title: 'Loading…',
    titleTemplate: '%s ← '+process.env.MIX_APP_NAME,
  },
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)
