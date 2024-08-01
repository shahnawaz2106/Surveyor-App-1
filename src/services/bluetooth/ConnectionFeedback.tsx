// src/services/bluetooth/ConnectionFeedback.ts
import React from 'react';
import { View, Text } from 'react-native';

const ConnectionFeedback: React.FC<{ status: string }> = ({ status }) => (
  <View>
    <Text>Connection Status: {status}</Text>
  </View>
);

export default ConnectionFeedback;
