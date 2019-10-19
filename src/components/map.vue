<script>
import initMap from '../lib/map.js';
import nextId from '../lib/utils.js';

export default {
  props: ['view'],
  inject: ['mapViews'],
  data: () => ({
    id: nextId(),
  }),
  computed: {
    mapView() {
      return this.mapViews[this.view];
    },
  },
  mounted: function () {
    initMap({
      id: this.id,
      centre: this.mapView.centre,
      zoom: this.mapView.zoom
    });
  },
};
</script>
<template>
  <div :id='id' class="map"></div>
</template>