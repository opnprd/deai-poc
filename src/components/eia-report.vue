<script>
  import section from './section.vue';
  import title from './title.vue';

  export default {
    props: [ 'config' ],
    components: {
      'report-title': title,
      'report-section': section,
    }
  };
</script>
<template>
  <article>
    <report-title v-bind:title="config.title" />
    <report-section
      v-for="(section, index) in config.sections"
      v-bind:title="section.title"
      v-bind:key="index" />
  </article>
</template>
