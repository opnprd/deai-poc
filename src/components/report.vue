<script>
import reportSection from "../components/section.vue";
import reportTitle from "../components/title.vue";

export default {
  props: ["title", "sections"],
  components: {
    "report-header": reportTitle,
    "report-section": reportSection
  }
};
</script>
<template>
  <article>
    <report-header :title="title" />
    <report-section v-for="(section, index) in sections" v-bind="section" :key="index" />
  </article>
</template>