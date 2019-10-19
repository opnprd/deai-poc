<script>
import initMap from '../lib/map.js';
import nextId from '../lib/utils.js';

export default {
  props: ['view'],
  data() {
    return {
      id: nextId(),
      map: null,
      mapView: this.$root.mapViews[this.view]
    };
  },
  mounted: function () {
    this.map = initMap({
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