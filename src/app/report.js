import eiaReport from '../components/eia-report.vue';

export default ({
  element,
  title,
  mapViews,
  sections,
}) => {
  new Vue({
    el: element,
    provide () {
      return {
        title,
        sections,
        mapViews,
      };
    },
    components: {
      'eia-report': eiaReport,
    },
    template: '<eia-report />',
  });
};
