// pythonBridge.js
// Handles communication with Python AI service

const { spawn } = require('child_process');

exports.analyzeBehavior = (data) => {
  return new Promise((resolve, reject) => {
    const py = spawn('python3', ['../ai/predictor.py']);
    let result = '';
    let error = '';

    py.stdin.write(JSON.stringify(data));
    py.stdin.end();

    py.stdout.on('data', (chunk) => {
      result += chunk.toString();
    });
    py.stderr.on('data', (chunk) => {
      error += chunk.toString();
    });
    py.on('close', (code) => {
      if (code !== 0 || error) {
        reject(new Error(error || `Python exited with code ${code}`));
      } else {
        try {
          resolve(JSON.parse(result));
        } catch (e) {
          reject(new Error('Invalid JSON from Python'));
        }
      }
    });
  });
};
