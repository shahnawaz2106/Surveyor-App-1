// src/services/bluetooth/ReadData.ts
import { useEffect, useState } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const ReadData = (deviceId: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const read = async () => {
      try {
        const receivedData = await Bluetooth.read(deviceId);
        setData(receivedData);
        console.log('Data received:', receivedData);
      } catch (error) {
        console.error('Read data failed:', error);
      }
    };

    read();
  }, [deviceId]);

  return null;
};

export default ReadData;
