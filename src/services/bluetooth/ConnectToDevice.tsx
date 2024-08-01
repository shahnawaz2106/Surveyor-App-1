// // src/services/bluetooth/ConnectToDevice.ts

// import { useEffect } from 'react';
// import { BluetoothDevice } from 'react-native-bluetooth';

// const ConnectToDevice = (deviceId: string) => {
//   useEffect(() => {
//     const connect = async () => {
//       try {
//         const device = await BluetoothDevice.connect(deviceId);
//         console.log('Connected to device:', device);
//       } catch (error) {
//         console.error('Failed to connect to device:', error);
//       }
//     };

//     connect();

//     return () => {
//       // Cleanup connection on unmount
//       BluetoothDevice.disconnect(deviceId);
//     };
//   }, [deviceId]);

//   return null;
// };

// export default ConnectToDevice;











// src/services/bluetooth/ConnectToDevice.ts
import { useEffect } from 'react';
import { BluetoothDevice } from 'react-native-bluetooth';

const ConnectToDevice = ({ deviceId }: { deviceId: string }) => {
  useEffect(() => {
    const connect = async () => {
      try {
        const device = await BluetoothDevice.connect(deviceId);
        console.log('Connected to device:', device);
      } catch (error) {
        console.error('Failed to connect to device:', error);
      }
    };

    connect();

    return () => {
      // Cleanup connection on unmount
      BluetoothDevice.disconnect(deviceId);
    };
  }, [deviceId]);

  return null;
};

export default ConnectToDevice;

