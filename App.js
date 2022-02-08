import React, {useEffect} from 'react';
import {io} from 'socket.io-client';

const App = () => {
  let socket = null;
  useEffect(() => {
    socket = io('192.168.18.7:3000');
    socket.on('connect', msg => {
      console.log('connected');
    });
  }, []);
  return null;
};

export default App;
