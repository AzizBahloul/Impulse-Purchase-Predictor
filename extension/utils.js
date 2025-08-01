// utils.js
// Shared utility functions for the extension

export function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 6) return 'night';
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  return 'evening';
}

export function getMoodFromText(text) {
  // Placeholder: integrate with sentiment analysis API or local model
  if (/happy|excited|joy/i.test(text)) return 'positive';
  if (/sad|angry|frustrated/i.test(text)) return 'negative';
  return 'neutral';
}
