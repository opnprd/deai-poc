import reportSection from '../components/section.vue';
import reportTitle from '../components/title.vue';

export default ({
  element,
  reportSpec,
}) => {
  fetch(reportSpec).then(response => {
    return response.json();
  }).then(({ title, sections, mapViews }) => {
    new Vue({
      el: element,
      data() {
        return {
          title,
          sections,
          mapViews,
        };
      },
      components: {
        'report-header': reportTitle,
        'report-section': reportSection,
      },
      template: `<article>
      <report-header :title="title" />
      <report-section
        v-for="(section, index) in sections"
        v-bind="section"
        :key="index"
      />
    </article>`,
    });
  });
};
