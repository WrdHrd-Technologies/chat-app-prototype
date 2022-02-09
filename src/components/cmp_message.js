/**

* Brief : Brief Description of the file

* Release : Release version (0.0.1)

* Author : Sahibjot Singh

* Written : 08/02/2022

* Last Revision : 09/02/2022

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

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const cmp_message = ({by, msg, style}) => {
  return (
    <View style={{...styles.parentView, ...style}}>
      <Text style={{...styles.textStyle, fontWeight: 'bold'}}>{by}</Text>
      <Text style={styles.textStyle}>{msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 7,
  },
  textStyle: {
    marginVertical: 1,
  },
});

export default cmp_message;
