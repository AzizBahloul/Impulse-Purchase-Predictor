# predictor.py
# Receives JSON from Node.js, returns impulse purchase prediction
import sys
import json
from features import extract_features
import joblib
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), 'model', 'model.pkl')

try:
    model = joblib.load(MODEL_PATH)
except Exception:
    model = None

def main():
    raw = sys.stdin.read()
    data = json.loads(raw)
    features = extract_features(data)
    if model:
        risk = model.predict_proba([features])[0][1]
    else:
        risk = 0.5  # fallback
    result = {
        'risk': float(risk),
        'advice': 'Consider a cooling-off period.' if risk > 0.7 else 'You seem in control.'
    }
    print(json.dumps(result))

if __name__ == '__main__':
    main()
