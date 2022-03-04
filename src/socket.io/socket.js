/**

* Brief : Brief Description of the file

* Release : Release version (0.0.1)

* Author : Sahibjot Singh

* Written : 08/02/2022

* Last Revision : 03/03/2022

* ------------------------------- ChangeLog -----------------------------*

* [Version] [Date dd/mm/yy] [INITIALS] [TICKET] [Description of work done]

* ------------------------------- Modifications -----------------------------*

* [Version] [Date dd/mm/yy] [INITIALS] [TICKET] [Description of work done]

* ------------------------------- Includes -----------------------------*

* relative/path/to/fle

* ------------------------------- Called From -----------------------------*

* BasicChatApp\src\screens\Scn_Chat.js

* ------------------------------- Copyright -----------------------------*

* (c) Copyright, WrdHrd Technologies Pvt. Ltd., 2021. All rights Reserved. *

* -----------------------------------------------------------------------------*

*/

import {io} from 'socket.io-client';
let socket;

export const initiateSocket = (room, userName) => {
  socket = io('http://192.168.1.9:3000', {autoConnect: false});
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

export const subscribeToAudio = cb => {
  if (!socket) return true;
  socket.on('audio', ({audio, userName, fileName}) => {
    console.log(`filename=${fileName}`);
    return cb({error: null, audio, fileName, by: userName});
  });
};
export const sendMessage = (room, message) => {
  if (socket) socket.emit('chat', {message, room});
};

export const sendAudio = (room, audio) => {
  if (socket) socket.emit('voiceChat', {room, audio});
};
