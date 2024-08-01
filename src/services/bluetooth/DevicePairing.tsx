// // src/services/bluetooth/DevicePairing.ts
// import { useEffect } from 'react';
// import { Bluetooth } from 'react-native-bluetooth';

// const DevicePairing = (deviceId: string) => {
//   useEffect(() => {
//     const pairDevice = async () => {
//       try {
//         await Bluetooth.pair(deviceId);
//         console.log('Device paired:', deviceId);
//       } catch (error) {
//         console.error('Device pairing failed:', error);
//       }
//     };

//     pairDevice();
//   }, [deviceId]);

//   return null;
// };

// export default DevicePairing;




// src/services/bluetooth/DevicePairing.ts
import { useEffect } from 'react';
import { Bluetooth } from 'react-native-bluetooth';

const DevicePairing = ({ deviceId }: { deviceId: string }) => {
  useEffect(() => {
    const pairDevice = async () => {
      try {
        await Bluetooth.pair(deviceId);
        console.log('Device paired:', deviceId);
      } catch (error) {
        console.error('Device pairing failed:', error);
      }
    };

    pairDevice();
  }, [deviceId]);

  return null;
};

export default DevicePairing;

