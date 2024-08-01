// src/services/bluetooth/Reconnect.ts
import { useEffect } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const Reconnect = (deviceId: string) => {
  useEffect(() => {
    const attemptReconnect = async () => {
      try {
        await Bluetooth.connect(deviceId);
        console.log('Reconnected to device:', deviceId);
      } catch (error) {
        console.error('Reconnection failed:', error);
      }
    };

    attemptReconnect();
  }, [deviceId]);

  return null;
};

export default Reconnect;
