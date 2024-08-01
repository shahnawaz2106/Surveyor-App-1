// src/services/bluetooth/UserNotifications.ts
import { useEffect } from 'react';
import { Alert } from 'react-native';

const UserNotifications = (message: string) => {
  useEffect(() => {
    Alert.alert('Bluetooth Notification', message);
  }, [message]);

  return null;
};

export default UserNotifications;
