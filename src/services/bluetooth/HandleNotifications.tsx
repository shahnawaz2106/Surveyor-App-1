// src/services/bluetooth/HandleNotifications.ts
import { useEffect } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const HandleNotifications = (deviceId: string) => {
  useEffect(() => {
    const handleNotification = (data: any) => {
      console.log('Notification received:', data);
    };

    Bluetooth.onNotification(deviceId, handleNotification);

    return () => {
      Bluetooth.offNotification(deviceId, handleNotification);
    };
  }, [deviceId]);

  return null;
};

export default HandleNotifications;
