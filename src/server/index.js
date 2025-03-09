
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend API is running' });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to a database
  console.log('Contact form submission:', { name, email, message });
  
  // For now just simulate success
  res.json({ 
    success: true, 
    message: 'Message received successfully!' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
