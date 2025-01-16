// server/server.jsx
import express from 'express';
import cors from 'cors';

// Create an Express app
const app = express();
const PORT = 5000;  // Backend server port

// Middleware
app.use(cors());  // Allow frontend to access this backend (CORS)
app.use(express.json());  // Parse incoming JSON requests

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

// API route example
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Handle form submission here (e.g., save data to a database)
  res.status(200).json({
    message: 'Form submitted successfully!',
    data: { name, email, subject, message }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
