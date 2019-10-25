import Vue from 'vue';
import { get } from '../lib/http.js';
import reportHeader from '../components/title.vue';
import reportSection from '../components/section.vue';
import { getDatasets } from '../lib/geojson.js';

export default async ({
  element,
  reportSpec,
}) => {
  // TODO: move this to a worker thread.
  const { title, sections, sources, mapViews } = await get(reportSpec);
  const datasets = await getDatasets(sources);
  new Vue({
    el: element,
    components: {
      'report-header': reportHeader,
      'report-section': reportSection,
    },
    data() {
      return {
        datasets,
        mapViews,
        sections,
        title,
      };
    },
  });
};
