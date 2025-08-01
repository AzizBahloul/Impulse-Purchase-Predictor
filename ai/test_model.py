# test_model.py
# Script to test the trained model

import pandas as pd
import joblib
import os

def test_model():
    # Load the trained Isolation Forest model
    model_path = os.path.join(os.path.dirname(__file__), 'model', 'model.pkl')
    model = joblib.load(model_path)

    # Load the test dataset
    data_path = os.path.join(os.path.dirname(__file__), 'model', 'training_data.csv')
    data = pd.read_csv(data_path)

    # Extract features
    X_test = data[['ORDERQUANTITY', 'SALES', 'DISCOUNT', 'PROFIT', 'UNITPRICE', 'SHIPPINGCOSTS']]

    # Predict anomalies (-1 indicates anomaly, 1 indicates normal)
    predictions = model.predict(X_test)
    anomaly_count = (predictions == -1).sum()

    print(f"Number of anomalies detected: {anomaly_count}")

if __name__ == '__main__':
    test_model()
