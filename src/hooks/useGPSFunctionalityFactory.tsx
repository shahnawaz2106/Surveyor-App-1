// // src/services/gps/useGPSFunctionalityFactory.ts
// import React from 'react';
// import { GPSFunctionalityType, GPSFunctionalityProps } from '../types';
// import BreadcrumbTracking from '../services/gps/BreadcrumbTracking';
// import CurrentLocationTracking from '../services/gps/CurrentLocationTracking';
// import IndicatorProximityCheck from '../services/gps/IndicatorProximityCheck';
// import GPSDataSynchronization from '../services/gps/GPSDataSynchronization';
// import GPSDataStorage from '../services/gps/GPSDataStorage';
// import MapVisualization from '../services/gps/MapVisualization.tsx';
// import GPSBasedNotifications from '../services/gps/GPSBasedNotifications';

// class useGPSFunctionalityFactory {
//   static createService(serviceName: GPSFunctionalityType, props: GPSFunctionalityProps) {
//     // Additional logic, if needed
//     this.initializeService(serviceName, props);

//     switch (serviceName) {
//       case 'BreadcrumbTracking':
//         return <BreadcrumbTracking {...props} />;
//       case 'CurrentLocationTracking':
//         return <CurrentLocationTracking {...props} />;
//       case 'IndicatorProximityCheck':
//         return <IndicatorProximityCheck {...props} />;
//       case 'GPSDataSynchronization':
//         return <GPSDataSynchronization {...props} />;
//       case 'GPSDataStorage':
//         return <GPSDataStorage {...props} />;
//       case 'MapVisualization':
//         return <MapVisualization {...props} />;
//       case 'GPSBasedNotifications':
//         return <GPSBasedNotifications {...props} />;
//       default:
//         throw new Error(`Unknown GPS functionality type: ${serviceName}`);
//     }
//   }

//   static initializeService(serviceName: GPSFunctionalityType, props: GPSFunctionalityProps) {
//     // Example of additional logic: Logging and initial setup
//     console.log(`Initializing GPS service: ${serviceName}`);
//     // Add more initialization or configuration logic here if needed
//   }
// }

// export default useGPSFunctionalityFactory;







// src/hooks/useGPSFunctionalityFactory.ts
import { GPSFunctionalityType } from '../types';
import BreadcrumbTracking from '../services/gps/BreadcrumbTracking';
import CurrentLocationTracking from '../services/gps/CurrentLocationTracking';
import IndicatorProximityCheck from '../services/gps/IndicatorProximityCheck';
import GPSDataSynchronization from '../services/gps/GPSDataSynchronization';
import GPSDataStorage from '../services/gps/GPSDataStorage';
import MapVisualization from '../services/gps/MapVisualization';
import GPSBasedNotifications from '../services/gps/GPSBasedNotifications';

const useGPSFunctionalityFactory = (type: GPSFunctionalityType) => {
  switch (type) {
    case 'BreadcrumbTracking':
      return BreadcrumbTracking;
    case 'CurrentLocationTracking':
      return CurrentLocationTracking;
    case 'IndicatorProximityCheck':
      return IndicatorProximityCheck;
    case 'GPSDataSynchronization':
      return GPSDataSynchronization;
    case 'GPSDataStorage':
      return GPSDataStorage;
    case 'MapVisualization':
      return MapVisualization;
    case 'GPSBasedNotifications':
      return GPSBasedNotifications;
    default:
      throw new Error(`Unknown GPS functionality type: ${type}`);
  }
};

export default useGPSFunctionalityFactory;

