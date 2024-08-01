// // src/hooks/useBluetoothFunctionalityFactory.ts

// import { BluetoothFunctionalityType, BluetoothFunctionalityProps } from '../types';
// import ConnectToDevice from '../services/bluetooth/ConnectToDevice';
// import SendDataToBackend from '../services/bluetooth/SendDataToBackend';
// import RealTimeDataStreaming from '../services/bluetooth/RealTimeDataStreaming';
// import BreadcrumbTracking from '../services/bluetooth/BreadcrumbTracking';
// import OfflineModeSupport from '../services/bluetooth/OfflineModeSupport';
// import BackgroundProcessing from '../services/bluetooth/BackgroundProcessing.tsx';

// const useBluetoothFunctionalityFactory = (type: BluetoothFunctionalityType) => {
//   switch (type) {
//     case 'ConnectToDevice':
//       return ConnectToDevice;
//     case 'SendDataToBackend':
//       return SendDataToBackend;
//     case 'RealTimeDataStreaming':
//       return RealTimeDataStreaming;
//     case 'BreadcrumbTracking':
//       return BreadcrumbTracking;
//     case 'OfflineModeSupport':
//       return OfflineModeSupport;
//     case 'BackgroundProcessing':
//       return BackgroundProcessing;
//     default:
//       throw new Error(`Unknown Bluetooth functionality type: ${type}`);
//   }
// };

// export default useBluetoothFunctionalityFactory;





// src/services/bluetooth/BluetoothFactory.ts
// import BluetoothInitialization from './BluetoothInitialization';
// import BluetoothPermissions from './BluetoothPermissions';
// import BluetoothStateMonitoring from './BluetoothStateMonitoring';
// import ScanForDevices from './ScanForDevices';
// import FilterDevices from './FilterDevices';
// import DevicePairing from './DevicePairing';
// import ReadData from './ReadData';
// import WriteData from './WriteData';
// import HandleNotifications from './HandleNotifications';
// import ParseData from './ParseData';
// import DataIntegration from './DataIntegration';
// import MonitorConnection from './MonitorConnection';
// import Reconnect from './Reconnect';
// import BluetoothSettings from './BluetoothSettings';
// import DeviceSelection from './DeviceSelection';
// import ConnectionFeedback from './ConnectionFeedback';
// import ErrorHandling from './ErrorHandling';
// import UserNotifications from './UserNotifications';
// import BackgroundProcessing from './BackgroundProcessing';
// import ConnectToDevice from './ConnectToDevice';
// import SendDataToBackend from './SendDataToBackend';
// import RealTimeDataStreaming from './RealTimeDataStreaming';
// import BreadcrumbTracking from './BreadcrumbTracking';
// import OfflineModeSupport from './OfflineModeSupport';

// class BluetoothFactory {
//   static createService(serviceName: string, ...args: any[]) {
//     switch (serviceName) {
//       case 'BluetoothInitialization':
//         return <BluetoothInitialization {...args} />;
//       case 'BluetoothPermissions':
//         return <BluetoothPermissions {...args} />;
//       case 'BluetoothStateMonitoring':
//         return <BluetoothStateMonitoring {...args} />;
//       case 'ScanForDevices':
//         return <ScanForDevices {...args} />;
//       case 'FilterDevices':
//         return <FilterDevices {...args} />;
//       case 'DevicePairing':
//         return <DevicePairing {...args} />;
//       case 'ReadData':
//         return <ReadData {...args} />;
//       case 'WriteData':
//         return <WriteData {...args} />;
//       case 'HandleNotifications':
//         return <HandleNotifications {...args} />;
//       case 'ParseData':
//         return <ParseData {...args} />;
//       case 'DataIntegration':
//         return <DataIntegration {...args} />;
//       case 'MonitorConnection':
//         return <MonitorConnection {...args} />;
//       case 'Reconnect':
//         return <Reconnect {...args} />;
//       case 'BluetoothSettings':
//         return <BluetoothSettings {...args} />;
//       case 'DeviceSelection':
//         return <DeviceSelection {...args} />;
//       case 'ConnectionFeedback':
//         return <ConnectionFeedback {...args} />;
//       case 'ErrorHandling':
//         return <ErrorHandling {...args} />;
//       case 'UserNotifications':
//         return <UserNotifications {...args} />;
//       case 'BackgroundProcessing':
//         return <BackgroundProcessing {...args} />;
//       case 'ConnectToDevice':
//         return <ConnectToDevice {...args} />;
//       case 'SendDataToBackend':
//         return <SendDataToBackend {...args} />;
//       case 'RealTimeDataStreaming':
//         return <RealTimeDataStreaming {...args} />;
//       case 'BreadcrumbTracking':
//         return <BreadcrumbTracking {...args} />;
//       case 'OfflineModeSupport':
//         return <OfflineModeSupport {...args} />;
//       default:
//         throw new Error('Unknown Bluetooth service');
//     }
//   }
// }

// export default BluetoothFactory;










// src/hooks/useBluetoothFunctionalityFactory.ts
import { BluetoothFunctionalityType } from '../types';
import ConnectToDevice from '../services/bluetooth/ConnectToDevice';
import SendDataToBackend from '../services/bluetooth/SendDataToBackend';
import RealTimeDataStreaming from '../services/bluetooth/RealTimeDataStreaming';
import BreadcrumbTracking from '../services/bluetooth/BreadcrumbTracking';
import OfflineModeSupport from '../services/bluetooth/OfflineModeSupport';
import BackgroundProcessing from '../services/bluetooth/BackgroundProcessing';
import BluetoothInitialization from '../services/bluetooth/BluetoothInitialization';
import BluetoothPermissions from '../services/bluetooth/BluetoothPermissions';
import BluetoothStateMonitoring from '../services/bluetooth/BluetoothStateMonitoring.tsx';
import ScanForDevices from '../services/bluetooth/ScanForDevices';
import FilterDevices from '../services/bluetooth/FilterDevices';
import DevicePairing from '../services/bluetooth/DevicePairing';
import ReadData from '../services/bluetooth/ReadData';
import WriteData from '../services/bluetooth/WriteData';
import HandleNotifications from '../services/bluetooth/HandleNotifications';
import ParseData from '../services/bluetooth/ParseData';
import DataIntegration from '../services/bluetooth/DataIntegration';
import MonitorConnection from '../services/bluetooth/MonitorConnection';
import Reconnect from '../services/bluetooth/Reconnect';
import BluetoothSettings from '../services/bluetooth/BluetoothSettings';
import DeviceSelection from '../services/bluetooth/DeviceSelection';
import ConnectionFeedback from '../services/bluetooth/ConnectionFeedback';
import ErrorHandling from '../services/bluetooth/ErrorHandling';
import UserNotifications from '../services/bluetooth/UserNotifications';

const useBluetoothFunctionalityFactory = (type: BluetoothFunctionalityType) => {
  switch (type) {
    case 'ConnectToDevice':
      return ConnectToDevice;
    case 'SendDataToBackend':
      return SendDataToBackend;
    case 'RealTimeDataStreaming':
      return RealTimeDataStreaming;
    case 'BreadcrumbTracking':
      return BreadcrumbTracking;
    case 'OfflineModeSupport':
      return OfflineModeSupport;
    case 'BackgroundProcessing':
      return BackgroundProcessing;
    case 'BluetoothInitialization':
      return BluetoothInitialization;
    case 'BluetoothPermissions':
      return BluetoothPermissions;
    case 'BluetoothStateMonitoring':
      return BluetoothStateMonitoring;
    case 'ScanForDevices':
      return ScanForDevices;
    case 'FilterDevices':
      return FilterDevices;
    case 'DevicePairing':
      return DevicePairing;
    case 'ReadData':
      return ReadData;
    case 'WriteData':
      return WriteData;
    case 'HandleNotifications':
      return HandleNotifications;
    case 'ParseData':
      return ParseData;
    case 'DataIntegration':
      return DataIntegration;
    case 'MonitorConnection':
      return MonitorConnection;
    case 'Reconnect':
      return Reconnect;
    case 'BluetoothSettings':
      return BluetoothSettings;
    case 'DeviceSelection':
      return DeviceSelection;
    case 'ConnectionFeedback':
      return ConnectionFeedback;
    case 'ErrorHandling':
      return ErrorHandling;
    case 'UserNotifications':
      return UserNotifications;
    default:
      throw new Error(`Unknown Bluetooth functionality type: ${type}`);
  }
};

export default useBluetoothFunctionalityFactory;
