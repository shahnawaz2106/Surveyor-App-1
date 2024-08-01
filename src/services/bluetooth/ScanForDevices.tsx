// src/services/bluetooth/ScanForDevices.ts
import { useEffect, useState } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const ScanForDevices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const scan = async () => {
      try {
        const foundDevices = await Bluetooth.scan();
        setDevices(foundDevices);
        console.log('Devices found:', foundDevices);
      } catch (error) {
        console.error('Device scan failed:', error);
      }
    };

    scan();
  }, []);

  return null;
};

export default ScanForDevices;
