import report from './app/report.js';

fetch('./report.json').then(response => {
  return response.json();
}).then(reportSpec => {
  report({
    element: '#app',
    ...reportSpec,
  });
});
