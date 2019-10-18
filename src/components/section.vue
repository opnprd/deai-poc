<script>
import map from './map.vue';

export default {
  props: [ 'title', 'content' ],
  components: {
    'report-map': map,
  }
}
</script>
<template>
  <section>
    <h1>{{ title }}</h1>
    <div v-for='(block, index) in content' :key='index'>
      <report-map v-if='block.type === "map"' :view='block.view' />
    </div>
  </section>
</template>