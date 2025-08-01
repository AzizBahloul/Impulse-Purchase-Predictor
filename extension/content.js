// content.js
// Injected into shopping sites, collects browsing and behavioral data

(function() {
  let startTime = Date.now();
  let lastUrl = location.href;

  function sendBehaviorData(eventType, extra = {}) {
    const data = {
      url: location.href,
      eventType,
      timestamp: new Date().toISOString(),
      timeSpent: (Date.now() - startTime) / 1000,
      ...extra
    };
    chrome.runtime.sendMessage({ type: 'ANALYZE_BEHAVIOR', data });
  }

  window.addEventListener('beforeunload', () => {
    sendBehaviorData('PAGE_EXIT');
  });

  document.addEventListener('click', e => {
    if (e.target && (e.target.matches('button.buy, .add-to-cart, .checkout, [data-buy]'))) {
      sendBehaviorData('PURCHASE_ATTEMPT', { element: e.target.outerHTML });
    }
  });

  setInterval(() => {
    if (location.href !== lastUrl) {
      sendBehaviorData('URL_CHANGE', { from: lastUrl, to: location.href });
      lastUrl = location.href;
      startTime = Date.now();
    }
  }, 2000);
})();
