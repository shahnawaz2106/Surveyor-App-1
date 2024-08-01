// src/services/bluetooth/DeviceSelection.ts
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Bluetooth } from 'react-native-bluetooth';

const DeviceSelection: React.FC = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const scan = async () => {
      try {
        const foundDevices = await Bluetooth.scan();
        setDevices(foundDevices);
        console.log('Devices found:', foundDevices);
      } catch (error) {
        console.error('Device scan failed:', error);
      }
    };

    scan();
  }, []);

  return (
    <View>
      <Text>Select a Device</Text>
      {devices.map((device, index) => (
        <Button key={index} title={device.name} onPress={() => console.log('Selected device:', device)} />
      ))}
    </View>
  );
};

export default DeviceSelection;
