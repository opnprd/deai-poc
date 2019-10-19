<script>
  import section from './section.vue';
  import title from './title.vue';

  export default {
    inject: ['title', 'sections'],
    components: {
      'report-title': title,
      'report-section': section,
    }
  };
</script>
<template>
  <article>
    <report-title v-bind:title="title" />
    <report-section
      v-for="(section, index) in sections"
      :key="index"
      :title="section.title"
      :content="section.content"
      />
  </article>
</template>
