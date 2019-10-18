<script>
  import section from './section.vue';
  import title from './title.vue';
  import report from '../lib/report-definition.js';
  console.log(report.state);

  export default {
    data: () => ({
      report: report.state,
    }),
    components: {
      'report-title': title,
      'report-section': section,
    }
  };
</script>
<template>
  <article>
    <report-title v-bind:title="report.title" />
    <report-section
      v-for="(section, index) in report.sections"
      :key="index"
      :title="section.title"
      :content="section.content"
      />
  </article>
</template>
