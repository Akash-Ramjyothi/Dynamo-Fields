/**
 * reportWebVitals
 * Dynamically imports web-vitals and reports metrics via the provided callback.
 *
 * @param {(metric: import('web-vitals').Metric) => void} onPerfEntry
 */
const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry !== 'function') return;

  import('web-vitals')
    .then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      try {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      } catch (error) {
        console.error('[WebVitals] Error collecting metrics:', error);
      }
    })
    .catch((error) => {
      console.error('[WebVitals] Failed to load web-vitals:', error);
    });
};

export default reportWebVitals;
