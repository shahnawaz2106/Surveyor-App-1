// src/services/bluetooth/BluetoothPermissions.ts
import { useEffect } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const BluetoothPermissions = () => {
  useEffect(() => {
    const requestPermissions = async () => {
      try {
        await Bluetooth.requestPermissions();
        console.log('Bluetooth permissions granted');
      } catch (error) {
        console.error('Bluetooth permissions denied:', error);
      }
    };

    requestPermissions();
  }, []);

  return null;
};

export default BluetoothPermissions;
