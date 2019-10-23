<script>
import map from './map.vue';

export default {
  props: [ 'title', 'content' ],
  components: {
    'data-map': map,
  }
}
</script>
<template>
  <section>
    <h1>{{ title }}</h1>
    <div v-for='(block, index) in content' :key='index'>
      <data-map v-if='block.type === "map"' :view='block.view' />
    </div>
  </section>
</template>