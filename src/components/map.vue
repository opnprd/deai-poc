<script>
import initMap from '../lib/map.js';
import nextId from '../lib/utils.js';
import ref from '../lib/report-definition.js';

export default {
  props: ['view'],
  data: () => ({
    id: nextId(),
  }),
  mounted: function () {
    const mapView = ref.state.mapViews[this.view];
    initMap({
      id: this.id,
      centre: mapView.centre,
      zoom: mapView.zoom
    });
  },
};
</script>
<template>
  <div :id='id' class="map"></div>
</template>