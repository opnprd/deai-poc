import eiaReport from '../components/eia-report.vue';

export default ({
  element,
  config,
}) => {
  new Vue({el: element,
    components: {
      'eia-report': eiaReport,
    },
    data: {
      config,
    },
    template: '<eia-report v-bind:config="config"></eia-report>',
  });
};
