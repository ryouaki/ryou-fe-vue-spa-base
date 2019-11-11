<template>
  <router-view/>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Ryouaki',
  created() {
    this.doInit();
  },
  methods: {
    ...mapActions('App', ['doInit'])
  }
};
</script>