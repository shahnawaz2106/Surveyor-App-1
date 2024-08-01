// src/services/bluetooth/OfflineModeSupport.ts

import { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

const OfflineModeSupport = (data: any) => {
  const [offlineData, setOfflineData] = useState<any[]>([]);

  useEffect(() => {
    const saveDataLocally = async () => {
      try {
        const storedData = await AsyncStorage.getItem('offlineData');
        const offlineData = storedData ? JSON.parse(storedData) : [];
        offlineData.push(data);
        await AsyncStorage.setItem('offlineData', JSON.stringify(offlineData));
        setOfflineData(offlineData);
      } catch (error) {
        console.error('Failed to save data locally:', error);
      }
    };

    saveDataLocally();
  }, [data]);

  return null;
};

export default OfflineModeSupport;
