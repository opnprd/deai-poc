import axios from 'axios';
import Vue from 'vue';
import reportHeader from '../components/title.vue';
import reportSection from '../components/section.vue';

export default ({
  element,
  reportSpec,
}) => {
  axios.get(reportSpec).then(response => {
    const { title, sections, mapViews } = response.data;
    console.log(sections);
    new Vue({
      el: element,
      components: {
        'report-header': reportHeader,
        'report-section': reportSection,
      },
      data() {
        return {
          mapViews,
          sections,
          title,
        };
      },
    });
  });
};
