
export type MapComponentType =
  | 'MapView'
  | 'MapMarker'
  | 'UserLocation'
  | 'BreadcrumbTrail'
  | 'DataOverlay'
  | 'OfflineCaching'
  | 'TileDownload'
  | 'GestureHandling'
  | 'ClickAndDrag'
  | 'SearchFunctionality'
  | 'FilterOptions'
  | 'DrawingTools'
  | 'Annotations'
  | 'APIIntegration'
  | 'DataSync';

export interface MapComponentProps {
  [key: string]: any;
}



export type BluetoothFunctionalityType =
  | 'ConnectToDevice'
  | 'SendDataToBackend'
  | 'RealTimeDataStreaming'
  | 'BreadcrumbTracking'
  | 'OfflineModeSupport'
  | 'BackgroundProcessing'
  | 'BluetoothInitialization'
  | 'BluetoothPermissions'
  | 'BluetoothStateMonitoring'
  | 'ScanForDevices'
  | 'FilterDevices'
  | 'DevicePairing'
  | 'ReadData'
  | 'WriteData'
  | 'HandleNotifications'
  | 'ParseData'
  | 'DataIntegration'
  | 'MonitorConnection'
  | 'Reconnect'
  | 'BluetoothSettings'
  | 'DeviceSelection'
  | 'ConnectionFeedback'
  | 'ErrorHandling'
  | 'UserNotifications';

export interface BluetoothFunctionalityProps {
  [key: string]: any;
}




// src/types/GPSFunctionalityType.ts
export type GPSFunctionalityType =
  | 'BreadcrumbTracking'
  | 'CurrentLocationTracking'
  | 'IndicatorProximityCheck'
  | 'GPSDataSynchronization'
  | 'GPSDataStorage'
  | 'MapVisualization'
  | 'GPSBasedNotifications';

// src/types/GPSFunctionalityProps.ts
export interface GPSFunctionalityProps {
  // Define common props for all GPS functionalities here
  // e.g., userLocation, mapReference, etc.
  [key: string]: any;
}

