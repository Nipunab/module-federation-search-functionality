<template>

  <div class="nb-container-fluid">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {},
})
export default class AppComponent extends Vue {
  public transitionName = 'slide-fade';
}
</script>

<style lang="scss">
@import 'assets/styles/index.scss';
</style>
