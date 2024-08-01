// src/services/gps/IndicatorProximityCheck.ts
import React, { useEffect } from 'react';
import { GPSFunctionalityProps } from '../../types';
import haversine from 'haversine'; // Assuming a distance calculation library like haversine

const IndicatorProximityCheck: React.FC<GPSFunctionalityProps> = (props) => {
  useEffect(() => {
    // Logic to check proximity to indicator
    const { userLocation, indicatorLocation, onProximityCheck } = props;

    if (userLocation && indicatorLocation) {
      const distance = haversine(userLocation, indicatorLocation, { unit: 'meter' });
      const isNearby = distance <= props.proximityThreshold;

      if (onProximityCheck) {
        onProximityCheck(isNearby);
      }
    }
  }, [props]);

  return null;
};

export default IndicatorProximityCheck;
