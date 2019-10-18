import report from './app/report.js';

const centre = [ 53.741, -2.013 ];

const config = {
  title: 'Sample EIA Report',
  mapViews: {
    overview: {
      centre,
      zoom: 13,  
    },
    zoomed: {
      centre,
      zoom: 15,  
    },
  },
  sections: [
    {
      title: 'Section 1',
      content: [
        {
          type: 'map',
          view: 'overview',
        },
      ],
    },
    {
      title: 'Section 2',
      content: [
        {
          type: 'map',
          view: 'zoomed',
        },
      ],
    },
    {
      title: 'Section 3',
    },
  ],
};

report({
  element: '#app',
  ...config,
});
