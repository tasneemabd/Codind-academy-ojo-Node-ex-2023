const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to TCP server');

  // Send data to the server
  client.write('Hello from TCP client!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
  // Handle the received data from the server
});

client.on('end', () => {
  console.log('Disconnected from TCP server');
  // Perform any cleanup or additional logic when disconnected from the server
});
