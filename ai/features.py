# features.py
# Feature engineering for impulse purchase prediction

def extract_features(data):
    # Example: time spent, time of day, event type, mood, etc.
    features = []
    features.append(data.get('timeSpent', 0))
    hour = int(data.get('timestamp', '00:00:00')[11:13]) if 'timestamp' in data else 12
    features.append(hour)
    features.append(1 if data.get('eventType') == 'PURCHASE_ATTEMPT' else 0)
    # Mood: 0=neutral, 1=positive, -1=negative
    mood = data.get('mood', 'neutral')
    features.append({'neutral': 0, 'positive': 1, 'negative': -1}.get(mood, 0))
    # Add more features as needed
    return features
