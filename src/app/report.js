import eiaReport from '../components/eia-report.vue';
import report from '../lib/report-definition.js';

export default ({
  element,
  title,
  mapViews,
  sections,
}) => {
  report.setTitle(title);
  report.setSections(sections);
  report.setMapViews(mapViews);

  new Vue({
    el: element,
    components: {
      'eia-report': eiaReport,
    },
    template: '<eia-report />',
  });
};
