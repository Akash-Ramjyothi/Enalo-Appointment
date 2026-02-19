import { ReportHandler } from 'web-vitals';

/**
 * reportWebVitals
 * ----------------
 * Dynamically imports web-vitals and measures Core Web Vitals.
 * Metrics:
 *  - CLS  (Cumulative Layout Shift)
 *  - FID  (First Input Delay)
 *  - FCP  (First Contentful Paint)
 *  - LCP  (Largest Contentful Paint)
 *  - TTFB (Time to First Byte)
 *
 * Usage:
 * reportWebVitals(console.log);
 * or send metrics to analytics endpoint.
 */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (typeof onPerfEntry !== 'function') {
    return;
  }

  import('web-vitals')
    .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      try {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error reporting web vitals:', error);
        }
      }
    })
    .catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to load web-vitals:', error);
      }
    });
};

export default reportWebVitals;
