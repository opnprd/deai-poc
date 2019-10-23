import Vue from 'vue';
import report from '../components/report.vue';

export default ({
  element,
  reportSpec,
}) => {
  fetch(reportSpec).then(response => {
    return response.json();
  }).then(({ title, sections, mapViews }) => {
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
