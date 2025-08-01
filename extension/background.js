// background.js
// Handles extension events, communication, and triggers AI analysis

chrome.runtime.onInstalled.addListener(() => {
  console.log('Impulse Purchase Predictor installed.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ANALYZE_BEHAVIOR') {
    // Forward data to backend for AI analysis
    fetch('http://localhost:5000/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message.data)
    })
      .then(res => res.json())
      .then(prediction => sendResponse({ prediction }))
      .catch(err => sendResponse({ error: err.message }));
    return true; // async response
  }
});
