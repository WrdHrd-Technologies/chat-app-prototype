/**

* Brief : Brief Description of the file

* Release : Release version (0.0.1)

* Author : Sahibjot Singh

* Written : 08/02/2022

* Last Revision : 11/02/2022

* ------------------------------- ChangeLog -----------------------------*

* [Version] [Date dd/mm/yy] [INITIALS] [TICKET] [Description of work done] 

* ------------------------------- Modifications -----------------------------*

* [Version] [Date dd/mm/yy] [INITIALS] [TICKET] [Description of work done]
* [0.0.1] [11/02/2022] [] [] [Deleted some redundent code.]
* [0.0.2] [11/02/2022] [] [] [Added border radius and margin to text box]

* ------------------------------- Includes -----------------------------*

* relative/path/to/fle

* ------------------------------- Called From -----------------------------*

* BasicChatApp\App.js

* ------------------------------- Copyright -----------------------------*

* (c) Copyright, WrdHrd Technologies Pvt. Ltd., 2021. All rights Reserved. *

* -----------------------------------------------------------------------------*

*/

/* 0.0.1 */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Button, ScrollView} from 'react-native';

import {
  initiateSocket,
  disconnectSocket,
  sendMessage,
  subscribeToChat,
} from '../socket.io/socket';

import Message from '../components/cmp_message';

const Scn_Chat = ({route}) => {
  const [message, setMessage] = useState(''); // Current message written by the user
  const [messages, setMessages] = useState([]); //Messages array- stores messages in form of object {msg:'',isSent:true/false}
  const {room, userName} = route.params;

  /* 0.0.2 */

  function generateRandom(min = 0, max = 1000) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  console.log(generateRandom());

  useEffect(() => {
    initiateSocket(room, userName);
    subscribeToChat(({error, msg, by}) => {
      if (error) return;
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
          let style = {};
          if (msg.by == 'Bot') {
            style = {alignSelf: 'center'};
          } else if (msg.isSent) {
            style = {alignSelf: 'flex-end'};
          } else {
            style = {alignSelf: 'flex-start'};
          }
          return (
            <Message
              key={generateRandom()}
              by={msg.by}
              msg={msg.msg}
              style={style}
            />
          );
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
    /* 0.0.2 */
    borderRadius: 8,
    margin: 5,
    /* 0.0.2 */
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
