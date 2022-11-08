import * as React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { useLocation } from './src/hooks/useLocation';
import { height, width } from './src/utils/aspectRatio';

export default function App() {
  const { location, setLocation } = useLocation()
  function handleMapPress ({ nativeEvent }) {
    setLocation(nativeEvent.coordinate)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JSON.stringify({ longitude: location.longitude, latitude: location.latitude })}</Text>
      {location != null && <MapView
        style={styles.map} 
        provider={PROVIDER_GOOGLE} 
        region={location}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={location}
        />
      </MapView>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 50,
    lineHeight: 50

  },
  map: {
    width: width,
    height: height - 50,
  },
});