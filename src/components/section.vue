<script>
import map from './map.vue';
import narrative from './narrative.vue';

export default {
  props: [ 'title', 'content' ],
  components: {
    'data-map': map,
    'report-narrative': narrative,
  }
}
</script>
<template>
  <section>
    <h1>{{ title }}</h1>
    <div v-for='(block, index) in content' :key='index'>
      <data-map v-if='block.type === "map"' :view='block.view' />
      <report-narrative v-if='block.type === "narrative"' v-bind="block" />
    </div>
  </section>
</template>