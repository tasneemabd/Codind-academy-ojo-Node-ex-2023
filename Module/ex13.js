var cluster = require('cluster');
  // Get the number of CPUs

if(cluster.isMaster) {
 var numWorkers = require('os').cpus().length;

 console.log('Master cluster setting up ' + numWorkers + ' workers...');
  // Fork worker processes

 for(var i = 0; i < numWorkers; i++) {
  cluster.fork();
 }
  // Event handler for when a worker process exits

 cluster.on('online', function(worker) {
  console.log('Worker ' + worker.process.pid + ' is online');
 });
  // Worker process

 cluster.on('exit', function(worker, code, signal) {
  console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
  console.log('Starting a new worker');
  cluster.fork();
 });}
