import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111827' }}>
      <Text style={{ color: '#FCD34D', fontSize: 24, fontWeight: 'bold' }}>
        🚕 Kewaye
      </Text>
      <Text style={{ color: '#9CA3AF', marginTop: 8 }}>
        Connect. Work. Earn.
      </Text>
    </View>
  );
}
