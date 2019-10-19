<script>
import initMap from '../lib/map.js';
import nextId from '../lib/utils.js';

export default {
  props: ['view'],
  inject: ['mapViews'],
  data: () => ({
    id: nextId(),
  }),
  mounted: function () {
    const mapView = this.mapViews[this.view];
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