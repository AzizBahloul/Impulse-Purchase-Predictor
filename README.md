# Impulse Purchase Predictor

## Overview
The **Impulse Purchase Predictor** is a machine learning-based application designed to analyze user behavior and predict impulse purchases. It leverages advanced anomaly detection techniques, such as Isolation Forest, to identify patterns in purchasing behavior and detect anomalies that may indicate impulsive buying.

## Features
- **Anomaly Detection**: Uses Isolation Forest to detect anomalies in purchasing behavior.
- **Real-Time Analysis**: Integrates with a browser extension to analyze user behavior in real-time.
- **Backend Integration**: A Node.js backend communicates with the AI model for predictions.
- **Extensible Design**: Modular architecture for easy updates and feature additions.

## Project Structure
```
ai/
    features.py          # Feature extraction and preprocessing
    predictor.py         # Main prediction logic
    requirements.txt     # Python dependencies
    model/
        train.py         # Model training script
backend/
    package.json         # Node.js dependencies
    server.js            # Backend server
    routes/
        analysis.js      # API route for analysis
    services/
        pythonBridge.js  # Node.js to Python bridge
extension/
    background.js        # Browser extension background script
    content.js           # Browser extension content script
    manifest.json        # Extension manifest
    popup/
        popup.css        # Popup styling
        popup.html       # Popup interface
        popup.js         # Popup logic
shared/
    README.md            # Project documentation
    schemas/
        eventSchema.json # JSON schema for events
```

## Installation

### Prerequisites
- **Python 3.8+**
- **Node.js 14+**
- **npm**

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/impulse-purchase-predictor.git
   cd impulse-purchase-predictor
   ```

2. Install Python dependencies:
   ```bash
   cd ai
   pip install -r requirements.txt
   ```

3. Install Node.js dependencies:
   ```bash
   cd ../backend
   npm install
   ```

4. Build the browser extension:
   - Navigate to the `extension/` folder and load it as an unpacked extension in your browser.

## Usage

### Running the Backend
Start the Node.js server:
```bash
cd backend
node server.js
```

### Training the Model
Train the Isolation Forest model:
```bash
cd ai
python3 model/train.py
```

### Testing the Model
Test the trained model:
```bash
python3 ai/test_model.py
```

### Real-Time Analysis
1. Load the browser extension.
2. Interact with websites to generate behavioral data.
3. The extension sends data to the backend for analysis.

## API Endpoints

### POST `/api/analyze`
- **Description**: Analyzes user behavior data and returns predictions.
- **Request Body**:
  ```json
  {
    "url": "https://example.com",
    "eventType": "click",
    "timestamp": "2025-08-01T12:00:00Z",
    "timeSpent": 120.5
  }
  ```
- **Response**:
  ```json
  {
    "prediction": "anomaly"
  }
  ```

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or support, please contact [your-email@example.com].
