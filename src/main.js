import report from './app/report.js';

const config = {
  title: 'Sample EIA Report',
  sections: [
    {
      title: 'Section 1',
    },
    {
      title: 'Section 2',
    },
    {
      title: 'Section 3',
    },
  ],
};

report({
  element: '#app',
  config,
});
