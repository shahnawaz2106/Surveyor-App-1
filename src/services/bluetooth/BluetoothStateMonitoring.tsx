// src/services/bluetooth/BluetoothStateMonitoring.ts
import { useEffect, useState } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const BluetoothStateMonitoring = () => {
  const [bluetoothState, setBluetoothState] = useState('unknown');

  useEffect(() => {
    const handleStateChange = (state: string) => {
      setBluetoothState(state);
      console.log('Bluetooth state:', state);
    };

    Bluetooth.onStateChange(handleStateChange);

    return () => {
      Bluetooth.offStateChange(handleStateChange);
    };
  }, []);

  return null;
};

export default BluetoothStateMonitoring;
