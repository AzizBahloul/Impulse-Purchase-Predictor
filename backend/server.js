// server.js
// Node.js backend for Impulse Purchase Predictor

const express = require('express');
const cors = require('cors');
const analysisRouter = require('./routes/analysis');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/analyze', analysisRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
