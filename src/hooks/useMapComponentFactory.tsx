// // src/hooks/useMapComponentFactory.ts

// // import { MapComponentType, MapComponentProps } from '../types';
// import MapView from '../components/map/MapView';
// import MapMarker from '../components/map/MapMarker';
// import UserLocation from '../components/map/UserLocation';
// import BreadcrumbTrail from '../components/map/BreadcrumbTrail';
// import DataOverlay from '../components/map/DataOverlay';
// import { MapComponentType } from '../types';

// const useMapComponentFactory = (type: MapComponentType) => {
//   switch (type) {
//     case 'MapView':
//       return MapView;
//     case 'MapMarker':
//       return MapMarker;
//     case 'UserLocation':
//       return UserLocation;
//     case 'BreadcrumbTrail':
//       return BreadcrumbTrail;
//     case 'DataOverlay':
//       return DataOverlay;
//     default:
//       throw new Error(`Unknown map component type: ${type}`);
//   }
// };

// export default useMapComponentFactory;

// src/hooks/useMapComponentFactory.ts

import {MapComponentType, MapComponentProps} from '../types.ts';
import MapView from '../components/map/MapView';
import MapMarker from '../components/map/MapMarker';
import UserLocation from '../components/map/UserLocation';
import BreadcrumbTrail from '../components/map/BreadcrumbTrail';
import DataOverlay from '../components/map/DataOverlay';
// import OfflineCaching from '../components/map/OfflineCaching.tsx/index.ts';
// import TileDownload from '../components/map/TileDownload.tsx/index.ts';
// import GestureHandling from '../components/map/GestureHandling.tsx/index.ts';
// import ClickAndDrag from '../components/map/ClickAndDrag.tsx/index.ts';
// import SearchFunctionality from '../components/map/SearchFunctionality.tsx/index.ts';
// import FilterOptions from '../components/map/FilterOptions.tsx/index.ts';
// import DrawingTools from '../components/map/DrawingTools.tsx/index.ts';
// import Annotations from '../components/map/Annotations.tsx/index.ts';
// import APIIntegration from '../components/map/APIIntegration.tsx/index.ts';
// import DataSync from '../components/map/DataSync.tsx/index.ts';
import OfflineCaching from '../components/map/OfflineCaching';
import TileDownload from '../components/map/TileDownload';
import GestureHandling from '../components/map/GestureHandling';
import ClickAndDrag from '../components/map/ClickAndDrag';
import SearchFunctionality from '../components/map/SearchFunctionality';
import FilterOptions from '../components/map/FilterOptions.tsx';
import DrawingTools from '../components/map/DrawingTools.tsx';
import Annotations from '../components/map/Annotations.tsx';
import APIIntegration from '../components/map/APIIntegration.tsx';
import DataSync from '../components/map/DataSync.tsx';

const useMapComponentFactory = (type: MapComponentType) => {
  switch (type) {
    case 'MapView':
      return MapView;
    case 'MapMarker':
      return MapMarker;
    case 'UserLocation':
      return UserLocation;
    case 'BreadcrumbTrail':
      return BreadcrumbTrail;
    case 'DataOverlay':
      return DataOverlay;
    case 'OfflineCaching':
      return OfflineCaching;
    case 'TileDownload':
      return TileDownload;
    case 'GestureHandling':
      return GestureHandling;
    case 'ClickAndDrag':
      return ClickAndDrag;
    case 'SearchFunctionality':
      return SearchFunctionality;
    case 'FilterOptions':
      return FilterOptions;
    case 'DrawingTools':
      return DrawingTools;
    case 'Annotations':
      return Annotations;
    case 'APIIntegration':
      return APIIntegration;
    case 'DataSync':
      return DataSync;
    default:
      throw new Error(`Unknown map component type: ${type}`);
  }
};

export default useMapComponentFactory;
