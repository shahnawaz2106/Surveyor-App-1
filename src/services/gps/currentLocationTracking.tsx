// src/services/gps/CurrentLocationTracking.ts
import React, { useEffect } from 'react';
import { GPSFunctionalityProps } from '../../types';

const CurrentLocationTracking: React.FC<GPSFunctionalityProps> = (props) => {
  useEffect(() => {
    // Logic to center map on user's current location
    const { mapReference, userLocation } = props;
    if (mapReference && userLocation) {
      mapReference.current?.animateToRegion({
        ...userLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [props]);

  return null;
};

export default CurrentLocationTracking;
