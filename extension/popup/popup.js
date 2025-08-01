// popup.js
// Handles popup UI and user interaction

document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const coolingBtn = document.getElementById('coolingBtn');

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'GET_STATUS' }, response => {
      if (response && response.prediction) {
        status.textContent = `Impulse Purchase Risk: ${response.prediction.risk}`;
      } else {
        status.textContent = 'No data available.';
      }
    });
  });

  coolingBtn.onclick = () => {
    status.textContent = 'Suggested: Take a walk, meditate, or review your wishlist.';
  };
});
