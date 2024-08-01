// src/services/bluetooth/BluetoothInitialization.ts
import { useEffect } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const BluetoothInitialization = () => {
  useEffect(() => {
    const initializeBluetooth = async () => {
      try {
        await Bluetooth.initialize();
        console.log('Bluetooth initialized');
      } catch (error) {
        console.error('Bluetooth initialization failed:', error);
      }
    };

    initializeBluetooth();
  }, []);

  return null;
};

export default BluetoothInitialization;
