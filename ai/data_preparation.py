# data_preparation.py
# Script to clean and prepare the ORDERS.csv dataset for training

import pandas as pd
import os

def prepare_data():
    # Load the dataset
    file_path = os.path.join(os.path.dirname(__file__), 'jackjo999-assingment-7', 'ORDERS.csv')
    data = pd.read_csv(file_path, encoding='ISO-8859-1')

    # Handle missing values
    data = data.dropna()

    # Create a binary target column for impulse purchases (e.g., DISCOUNT > 0.2)
    data['impulse_purchase'] = (data['DISCOUNT'] > 0.2).astype(int)

    # Select relevant features
    features = ['ORDERQUANTITY', 'SALES', 'DISCOUNT', 'PROFIT', 'UNITPRICE', 'SHIPPINGCOSTS']
    target = 'impulse_purchase'

    # Encode categorical variables if needed (none in selected features)

    # Save the cleaned dataset
    cleaned_data_path = os.path.join(os.path.dirname(__file__), 'model', 'training_data.csv')
    data[features + [target]].to_csv(cleaned_data_path, index=False)
    print(f"Cleaned data saved to {cleaned_data_path}")

if __name__ == '__main__':
    prepare_data()
