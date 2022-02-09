/* 0.0.1 */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Text,
} from 'react-native';

import {
  initiateSocket,
  disconnectSocket,
  sendMessage,
  subscribeToChat,
} from '../components/cmp_socket';

const Scn_Chat = ({route}) => {
  const [message, setMessage] = useState(''); // Current message written by the user
  const [messages, setMessages] = useState([]); //Messages array- stores messages in form of object {msg:'',isSent:true/false}
  const {room, userName} = route.params;

  /*useEffect(() => {
    console.log(room, userName);
    socket = io('http://192.168.18.7:3000', {autoConnect: false});
    socket.auth = {userName};
    socket.connect();
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.emit('sendMessage', 'message');
  }, [room]);*/

  /* 0.0.2 */
  useEffect(() => {
    initiateSocket(room, userName);
    subscribeToChat(({error, msg, by}) => {
      if (error) return;
      /*0.0.1 
      setMessages([...messages, {msg, isSent: false, by}]); 
      */
      setMessages(OldMessages => [...OldMessages, {msg, isSent: false, by}]);
    });
    return () => {
      disconnectSocket();
    };
  }, [room]);
  /* 0.0.2 */

  return (
    <View style={styles.parentView}>
      <ScrollView style={styles.scrollView}>
        {messages.map(msg => {
          if (msg.by == 'Bot') {
            return <Text style={{alignSelf: 'center'}}>{msg.msg}</Text>;
          } else if (msg.isSent) {
            return <Text style={{alignSelf: 'flex-end'}}>{msg.msg}</Text>;
          } else {
            return <Text style={{alignSelf: 'flex-start'}}>{msg.msg}</Text>;
          }
        })}
      </ScrollView>
      <View style={styles.textBoxViewStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Type Message Here.."
          value={message}
          onChangeText={updatedMessage => setMessage(updatedMessage)}
        />
        <Button
          title="Send"
          onPress={() => {
            if (message == '') {
              alert('Enter a message');
              return;
            }
            sendMessage(room, message);
            console.log(messages);
            setMessages([
              ...messages,
              {isSent: true, msg: message, by: userName},
            ]);
            setMessage('');
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textBoxViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 18,
  },
  scrollView: {
    flex: 1,
  },
  parentView: {
    flex: 1,
  },
});
export default Scn_Chat;
/* 0.0.1 */
