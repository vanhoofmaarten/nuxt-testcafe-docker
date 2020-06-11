<template>
  <div class="container" data-test-id="page-index">
    <div>
      <logo />
      <h1 class="title">
        nuxt-testcafe-docker
      </h1>
      <h2 class="subtitle">
        Run TestCafé tests against Nuxt in dev-mode in a Docker container
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link to="about" class="button--grey">
          About
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '~/components/Logo.vue';

export default Vue.extend({
  components: {
    Logo,
  },
});
</script>
