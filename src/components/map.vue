<script>
import initMap from '../lib/map.js';
import nextId from '../lib/utils.js';

export default {
  props: {
    view: {
      type: String,
      required: true,
    },
    layers: {
      type: Array,
      default: function() { return []; },
    },
  },
  data() {
    return {
      id: nextId(),
      map: null,
      mapView: this.$root.mapViews[this.view],
      mapLayers: this.layers.map(layer => this.$root.datasets[layer]),
    };
  },
  mounted: function () {
    this.map = initMap({
      id: this.id,
      centre: this.mapView.centre,
      zoom: this.mapView.zoom,
      layers: this.mapLayers,
    });
  },
};
</script>
<template>
  <div :id='id' class="map"></div>
</template>