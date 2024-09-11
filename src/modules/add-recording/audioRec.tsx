import React, { useState, useRef } from 'react';
import { View, Button, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import { request, PERMISSIONS, RESULTS } from '@react-native-community/permissions';
import { PERMISSIONS,request,RESULTS } from 'react-native-permissions';

const AudioRecorder: React.FC = () => {
  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('');
  const [audioPath, setAudioPath] = useState('');

  const requestPermission = async () => { 
    const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
    return result === RESULTS.GRANTED;
  };

  const onStartRecord = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) {
      console.warn('Permission denied');
      return;
    }

    setRecording(true);
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e: any) => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      return;
    });
    setAudioPath(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecording(false);
    setAudioPath(result);
  };

  const onStartPlay = async () => {
    setPlaying(true);
    await audioRecorderPlayer.startPlayer(audioPath);
    audioRecorderPlayer.addPlayBackListener((e: any) => {
      if (e.currentPosition === e.duration) {
        onStopPlay();
      }
      return;
    });
  };

  const onStopPlay = async () => {
    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setPlaying(false);
  };

  return (
    <View>
      <Text>Record Time: {recordTime}</Text>
      <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? onStopRecord : onStartRecord} />
      <Button title={playing ? 'Stop Playing' : 'Start Playing'} onPress={playing ? onStopPlay : onStartPlay} disabled={!audioPath} />
    </View>
  );
};

export default AudioRecorder;