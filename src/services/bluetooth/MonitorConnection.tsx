// src/services/bluetooth/MonitorConnection.ts
import { useEffect, useState } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const MonitorConnection = (deviceId: string) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const handleConnectionChange = (status: boolean) => {
      setIsConnected(status);
      console.log('Connection status:', status);
    };

    Bluetooth.onConnectionChange(deviceId, handleConnectionChange);

    return () => {
      Bluetooth.offConnectionChange(deviceId, handleConnectionChange);
    };
  }, [deviceId]);

  return null;
};

export default MonitorConnection;
