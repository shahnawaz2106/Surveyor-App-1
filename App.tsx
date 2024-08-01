// // src/App.tsx

// import React from 'react';
// import {SafeAreaView} from 'react-native';
// import CustomMapComponent from './src/components/map/CustomMapComponent';
// import useBluetoothFunctionalityFactory from './src/hooks/useBluetoothFunctionalityFactory';

// const App: React.FC = () => {
//   const ConnectToDevice = useBluetoothFunctionalityFactory('ConnectToDevice');
//   const SendDataToBackend =
//     useBluetoothFunctionalityFactory('SendDataToBackend');
//   const RealTimeDataStreaming = useBluetoothFunctionalityFactory(
//     'RealTimeDataStreaming',
//   );
//   const BreadcrumbTracking =
//     useBluetoothFunctionalityFactory('BreadcrumbTracking');
//   const OfflineModeSupport =
//     useBluetoothFunctionalit  yFactory('OfflineModeSupport');
//   const BackgroundProcessing = useBluetoothFunctionalityFactory(
//     'BackgroundProcessing',
//   );

//   return (
//     <Provider store={store}>
//       <SafeAreaView>
//         <CustomMapComponent type="MapView" />
//         <CustomMapComponent type="MapMarker" />
//         <CustomMapComponent type="UserLocation" />
//         <CustomMapComponent type="BreadcrumbTrail" />
//         <CustomMapComponent type="DataOverlay" />
//         <CustomMapComponent type="OfflineCaching" />
//         <CustomMapComponent type="TileDownload" />
//         <CustomMapComponent type="GestureHandling" />
//         <CustomMapComponent type="ClickAndDrag" />
//         <CustomMapComponent type="SearchFunctionality" />
//         <CustomMapComponent type="FilterOptions" />
//         <CustomMapComponent type="DrawingTools" />
//         <CustomMapComponent type="Annotations" />
//         <CustomMapComponent type="APIIntegration" />
//         <CustomMapComponent type="DataSync" />

//         <ConnectToDevice deviceId="RKI12345" />
//         <RealTimeDataStreaming deviceId="RKI12345" />
//         <OfflineModeSupport data={{leakLevel: 'Severe'}} />
//         <BreadcrumbTracking deviceData={{location: 'someLocation'}} />
//         <BackgroundProcessing />
//       </SafeAreaView>
//     </Provider>
//   );
// };

// export default App;









// src/App.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import BreadcrumbTrail from './src/components/map/BreadcrumbTrail';
import BreadcrumbTracking from './src/services/bluetooth/BreadcrumbTracking';

const App: React.FC = () => {
  const deviceData = { location: 'someLocation', leakLevel: 'Severe' }; // Sample data

  return (
    <Provider store={store}>
      <SafeAreaView>
        <BreadcrumbTracking deviceData={deviceData} />
        <BreadcrumbTrail />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
