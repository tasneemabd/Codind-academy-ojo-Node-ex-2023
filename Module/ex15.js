const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    // Handle the received data
  });

  socket.on('end', () => {
    console.log('Client disconnected');
    // Perform cleanup or additional logic when client disconnects
  });

  // Send a welcome message to the client
  socket.write('Welcome to the TCP server!\r\n');
});

const port = 3000;

server.listen(port, () => {
  console.log(`TCP server is running and listening on port ${port}`);
});
