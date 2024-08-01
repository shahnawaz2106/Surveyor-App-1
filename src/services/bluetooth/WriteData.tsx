// src/services/bluetooth/WriteData.ts
import { useEffect } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const WriteData = (deviceId: string, data: any) => {
  useEffect(() => {
    const write = async () => {
      try {
        await Bluetooth.write(deviceId, data);
        console.log('Data written:', data);
      } catch (error) {
        console.error('Write data failed:', error);
      }
    };

    write();
  }, [deviceId, data]);

  return null;
};

export default WriteData;
