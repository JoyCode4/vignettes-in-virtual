
const { spawn } = require('child_process');
const path = require('path');

// Start the Vite dev server
const frontend = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Start the backend server
const backend = spawn('node', ['server.js'], {
  stdio: 'inherit',
  shell: true
});

// Handle process termination
process.on('SIGINT', () => {
  frontend.kill('SIGINT');
  backend.kill('SIGINT');
  process.exit();
});

console.log('🚀 Development servers started! Frontend + Backend');
