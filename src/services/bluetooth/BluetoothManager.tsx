// // src/services/bluetooth/BluetoothManager.ts
// import React from 'react';
// import useBluetoothFunctionalityFactory from '../../hooks/useBluetoothFunctionalityFactory';
// import { BluetoothFunctionalityType, BluetoothFunctionalityProps } from '../../types';

// class BluetoothManager {
//   static createService(serviceName: BluetoothFunctionalityType, props: BluetoothFunctionalityProps) {
//     // Additional initialization logic
//     this.initializeService(serviceName, props);

//     const ServiceComponent = useBluetoothFunctionalityFactory(serviceName);
//     return <ServiceComponent {...props} />;
//   }

//   static initializeService(serviceName: BluetoothFunctionalityType, props: BluetoothFunctionalityProps) {
//     // Example of additional logic: Logging and initial setup
//     console.log(`Initializing service: ${serviceName}`);

//     // Inject dependencies based on the configuration
//     if (props.config?.useMock) {
//       this.injectMockDependencies(serviceName, props);
//     } else {
//       this.injectRealDependencies(serviceName, props);
//     }

//     // Example of configuration handling: Setting default configurations
//     if (!props.config) {
//       props.config = {
//         retryAttempts: 3,
//         timeout: 5000,
//       };
//     }

//     // Add more initialization or configuration logic here if needed
//   }

//   static injectMockDependencies(serviceName: BluetoothFunctionalityType, props: BluetoothFunctionalityProps) {
//     // Inject mock dependencies
//     console.log(`Injecting mock dependencies for: ${serviceName}`);
//     if (serviceName === 'ConnectToDevice') {
//       props.dependency = 'Mocked Bluetooth Manager';
//     }
//     // Add other mock dependencies as needed
//   }

//   static injectRealDependencies(serviceName: BluetoothFunctionalityType, props: BluetoothFunctionalityProps) {
//     // Inject real dependencies
//     console.log(`Injecting real dependencies for: ${serviceName}`);
//     if (serviceName === 'ConnectToDevice') {
//       props.dependency = 'Real Bluetooth Manager';
//     }
//     // Add other real dependencies as needed
//   }
// }

// export default BluetoothManager;


























// src/services/bluetooth/BluetoothFactory.ts
import React from 'react';
import useBluetoothFunctionalityFactory from '../../hooks/useBluetoothFunctionalityFactory';
import { BluetoothFunctionalityType, BluetoothFunctionalityProps } from '../../types';

const BluetoothFactory = ({ serviceName, ...props }: { serviceName: BluetoothFunctionalityType } & BluetoothFunctionalityProps) => {
  // Additional initialization logic
  initializeService(serviceName, props);

  const ServiceComponent = useBluetoothFunctionalityFactory(serviceName);
  return <ServiceComponent {...props} />;
}

const initializeService = (serviceName: BluetoothFunctionalityType, props: BluetoothFunctionalityProps) => {
  // Example of additional logic
  console.log(`Initializing service: ${serviceName}`);
  // Add more initialization or configuration logic here if needed
}

export default BluetoothFactory;









// // Example usage in some component
// import React from 'react';
// import BluetoothFactory from '../services/bluetooth/BluetoothFactory';

// const SomeComponent = () => {
//   return (
//     <>
//       <BluetoothFactory serviceName="DevicePairing" deviceId="some-device-id" />
//       <BluetoothFactory serviceName="ConnectToDevice" deviceId="another-device-id" />
//     </>
//   );
// };

// export default SomeComponent;