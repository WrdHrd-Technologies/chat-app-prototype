/**

* Brief : Brief Description of the file

* Release : Release version (0.0.1)

* Author : Sahibjot Singh

* Written : 03/03/2022

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

import AudioRecorderPlayer from 'react-native-audio-recorder-player';
const RNFS = require('react-native-fs');
const fs = require('fs');
const pth = require('path');
const audioRecorderPlayer = new AudioRecorderPlayer();

const path = RNFS.DownloadDirectoryPath + '/sound.mp3';
// const path = RNFS.DocumentDirectoryPath + 'sound.mp3';

export async function read() {
  const data = await RNFS.readFile(path, 'base64');
  // console.log(data);
  console.log(Date.now());
  return data;
  // console.log(__dirname);
}

export const onStartRecord = async cb => {
  // console.log(path);
  const result = await audioRecorderPlayer.startRecorder(path);
  audioRecorderPlayer.addRecordBackListener(e => {
    cb(
      e.currentPosition,
      audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
    );
    return;
  });
  // console.log(result);
};

export const onStopRecord = async () => {
  const result = await audioRecorderPlayer.stopRecorder();
  audioRecorderPlayer.removeRecordBackListener();
  // console.log(result);
};

export const onStartPlay = async cb => {
  console.log('onStartPlay');
  const msg = await audioRecorderPlayer.startPlayer(path);
  // console.log(msg);
  audioRecorderPlayer.addPlayBackListener(e => {
    cb(
      e.currentPosition,
      e.duration,
      audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      audioRecorderPlayer.mmssss(Math.floor(e.duration)),
    );
    return;
  });
  await read();
};

export const onPausePlay = async () => {
  await audioRecorderPlayer.pausePlayer();
};

export const onStopPlay = async () => {
  console.log('onStopPlay');
  audioRecorderPlayer.stopPlayer();
  audioRecorderPlayer.removePlayBackListener();
};
