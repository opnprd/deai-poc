<script>
import marked from 'marked';
export default {
  props: [ 'markdown' ],
  computed: {
    html() {
      return marked(this.markdown.join('\n'));
    }
  }
}
</script>
<template>
  <section v-html="html" />
</template>