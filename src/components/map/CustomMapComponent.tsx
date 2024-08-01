// src/components/map/CustomMapComponent.tsx

import React from 'react';
import { MapComponentType, MapComponentProps } from '../../types';
import useMapComponentFactory from '../../hooks/useMapComponentFactory';

interface CustomMapComponentProps extends MapComponentProps {
  type: MapComponentType;
}

const CustomMapComponent: React.FC<CustomMapComponentProps> = ({ type, ...props }) => {
  const MapComponent = useMapComponentFactory(type);

  return <MapComponent {...props} />;
};

export default CustomMapComponent;
