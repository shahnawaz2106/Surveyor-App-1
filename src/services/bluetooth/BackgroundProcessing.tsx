// src/services/bluetooth/BackgroundProcessing.ts

import { useEffect } from 'react';
import { BackgroundTask } from 'react-native-background-task';

const BackgroundProcessing = () => {
  useEffect(() => {
    const startBackgroundTask = () => {
      BackgroundTask.define(() => {
        // Your background processing logic here
        console.log('Background task running');
        BackgroundTask.finish();
      });

      BackgroundTask.schedule({
        period: 900, // Period in seconds (e.g., every 15 minutes)
      });
    };

    startBackgroundTask();

    return () => {
      // Clean up background tasks
      BackgroundTask.cancelAll();
    };
  }, []);

  return null;
};

export default BackgroundProcessing;
