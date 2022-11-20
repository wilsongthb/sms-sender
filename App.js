import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, PermissionsAndroid, NativeModules } from 'react-native';

export default function App() {
  const requestSmsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can send sms');
      } else {
        console.log('ya perdi ps ya perdi :(');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const sendSms = () => {
    var RN = NativeModules.SendIntentAndroid;
    console.log("RN:", typeof RN);
    console.log("RN:", RN === null);
    // RN.sendSms("+51515151", "No mami");
    console.log("execute sms funcion");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={requestSmsPermission} title="request permissions"></Button>
      <Button title="send sms quickly" onPress={sendSms} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
