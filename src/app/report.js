import axios from 'axios';
import Vue from 'vue';
import report from '../components/report.vue';

export default ({
  element,
  reportSpec,
}) => {
  axios.get(reportSpec).then(response => {
    const { title, sections, mapViews } = response.data;
    new Vue({
      el: element,
      components: { 'es-report': report },
      data() {
        return {
          mapViews,
        };
      },
      render(h) {
        return h('es-report', { props: { title, sections } });
      },
    });
  });
};
