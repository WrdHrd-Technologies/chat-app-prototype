import {io} from 'socket.io-client';
let socket;

export const initiateSocket = (room, userName) => {
  socket = io('http://192.168.18.7:3000', {autoConnect: false});
  socket.auth = {userName};
  socket.connect();
  console.log('Connecting Socket...');
  if (socket && room) socket.emit('join', room);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

export const subscribeToChat = cb => {
  if (!socket) return true;
  socket.on('chat', ({message, userName}) => {
    console.log('Websocket event received!');
    console.log(`${message}, ${userName}`);
    return cb({error: null, msg: message, by: userName});
  });
};

export const sendMessage = (room, message) => {
  if (socket) socket.emit('chat', {message, room});
};
