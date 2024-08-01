// src/services/bluetooth/BluetoothSettings.ts
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Bluetooth } from 'react-native-bluetooth';

const BluetoothSettings: React.FC = () => {
  const enableBluetooth = async () => {
    try {
      await Bluetooth.enable();
      console.log('Bluetooth enabled');
    } catch (error) {
      console.error('Enable Bluetooth failed:', error);
    }
  };

  const disableBluetooth = async () => {
    try {
      await Bluetooth.disable();
      console.log('Bluetooth disabled');
    } catch (error) {
      console.error('Disable Bluetooth failed:', error);
    }
  };

  return (
    <View>
      <Text>Bluetooth Settings</Text>
      <Button title="Enable Bluetooth" onPress={enableBluetooth} />
      <Button title="Disable Bluetooth" onPress={disableBluetooth} />
    </View>
  );
};

export default BluetoothSettings;
