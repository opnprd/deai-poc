export default {
  debug: true,
  state: {
    title: null,
    sections: [],
    mapViews: {},
  },
  setTitle(title) {
    this.state.title = title;
  },
  setSections(sections) {
    this.state.sections = sections;
  },
  setMapViews(mapViews) {
    this.state.mapViews = mapViews;
  },
};