# train.py
# Train ML model for impulse purchase prediction
import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib
import os

def load_data():
    # Load the cleaned dataset
    data_path = os.path.join(os.path.dirname(__file__), 'training_data.csv')
    data = pd.read_csv(data_path)
    X = data[['ORDERQUANTITY', 'SALES', 'DISCOUNT', 'PROFIT', 'UNITPRICE', 'SHIPPINGCOSTS']]
    y = data['impulse_purchase']
    return X, y

def main():
    X, y = load_data()

    # Train an Isolation Forest model
    model = IsolationForest(n_estimators=100, contamination='auto', random_state=42)
    model.fit(X)

    model_path = os.path.join(os.path.dirname(__file__), 'model.pkl')
    joblib.dump(model, model_path)
    print(f"Isolation Forest model saved to {model_path}")

if __name__ == '__main__':
    main()
