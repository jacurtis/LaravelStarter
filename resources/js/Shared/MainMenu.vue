<template>
  <div>
    <div class="mb-4">
      <inertia-link class="flex items-center group py-3 pl-6" :href="route('home')">
        <icon name="dashboard" class="w-4 h-4 mr-2" :class="isUrl('home') ? 'fill-white' : 'fill-current text-teal-light group-hover:text-white'" />
        <div :class="isUrl('home') ? 'text-white' : 'text-teal-light group-hover:text-white'">Dashboard</div>
      </inertia-link>
    </div>
    <div class="mb-4">
      <inertia-link class="flex items-center group py-3 pl-6" :href="route('accounts')">
        <icon name="office" class="w-4 h-4 mr-2" :class="isUrl('organizations') ? 'fill-white' : 'fill-current text-teal-light group-hover:text-white'" />
        <div :class="isUrl('organizations') ? 'text-white' : 'text-teal-light group-hover:text-white'">Accounts</div>
      </inertia-link>
    </div>
    <div class="mb-4">
      <inertia-link class="flex items-center group py-3 pl-6" :href="route('users')">
        <icon name="users" class="w-4 h-4 mr-2" :class="isUrl('users') ? 'fill-white' : 'fill-current text-teal-light group-hover:text-white'" />
        <div :class="isUrl('users') ? 'text-white' : 'text-teal-light group-hover:text-white'">Users</div>
      </inertia-link>
    </div>
    <div class="mb-4">
      <inertia-link class="flex items-center group py-3 pl-6" :href="route('reports')">
        <icon name="printer" class="w-4 h-4 mr-2" :class="isUrl('reports') ? 'fill-white' : 'fill-current text-teal-light group-hover:text-white'" />
        <div :class="isUrl('reports') ? 'text-white' : 'text-teal-light group-hover:text-white'">Reports</div>
      </inertia-link>
    </div>
  </div>
</template>

<script>
import Icon from '@/Components/Icon'
export default {
  components: {
    Icon,
  },
  props: {
    url: String,
  },
  methods: {
    isUrl(...urls) {
      if (urls[0] === '') {
        return this.url === ''
      }
      return urls.filter(url => this.url.startsWith(url)).length
    },
  },
}
</script>
