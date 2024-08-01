// src/services/bluetooth/RealTimeDataStreaming.ts

import { useEffect } from 'react';
import { BluetoothDevice } from 'react-native-bluetooth';
import SendDataToBackend from './SendDataToBackend';

const RealTimeDataStreaming = (deviceId: string) => {
  useEffect(() => {
    const startStreaming = async () => {
      const device = await BluetoothDevice.connect(deviceId);
      device.on('data', async (data) => {
        console.log('Received data:', data);
        await SendDataToBackend(data);
      });
    };

    startStreaming();

    return () => {
      // Stop streaming on unmount
      BluetoothDevice.disconnect(deviceId);
    };
  }, [deviceId]);

  return null;
};

export default RealTimeDataStreaming;
