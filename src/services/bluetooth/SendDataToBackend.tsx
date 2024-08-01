// src/services/bluetooth/SendDataToBackend.ts

import axios from 'axios';

const SendDataToBackend = async (data: any) => {
  try {
    await axios.post('https://your-backend-service.com/api/data', data);
    console.log('Data sent to backend successfully');
  } catch (error) {
    console.error('Failed to send data to backend:', error);
  }
};

export default SendDataToBackend;
