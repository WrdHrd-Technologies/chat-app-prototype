import React, {useState} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

const Scn_Room = ({navigation}) => {
  const [userName, setUserName] = useState('');
  function navigateToChats(room) {
    if (userName == '') {
      alert('Enter a valid username!');
    } else {
      navigation.navigate('Chat Screen', {room, userName});
    }
  }
  return (
    <View style={styles.parentViewStyle}>
      <TextInput
        placeholder="Enter Username.."
        value={userName}
        onChangeText={updatedName => setUserName(updatedName)}
        style={styles.textInputStyle}
      />
      <Button title="Cricket" onPress={() => navigateToChats('Cricket')} />
      <Button
        title="Technology"
        onPress={() => navigateToChats('Technology')}
      />
      <Button title="Music" onPress={() => navigateToChats('Music')} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    margin: 5,
    width: 50,
  },
  textInputStyle: {
    borderWidth: 1,
    fontSize: 20,
  },
});

export default Scn_Room;
