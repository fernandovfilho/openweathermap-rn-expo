import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import {ActivityIndicator} from 'react-native';
import {Marker} from 'react-native-maps';

import {Container} from './styles';

export default function Maps() {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [regionChange, setRegionChange] = useState(false);

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestPermissionsAsync();

      const {
        coords: {latitude, longitude},
      } = await Location.getCurrentPositionAsync({});

      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      });
    })();
  }, []);

  function onDragStart() {
    setRegionChange(true);
  }

  function onDragEnd(region) {
    setCurrentRegion(region);
    setRegionChange(false);
  }

  return currentRegion ? (
    <Container
      initialRegion={currentRegion}
      onRegionChange={onDragStart}
      onRegionChangeComplete={onDragEnd}>
      {!regionChange && (
        <Marker
          coordinate={{
            latitude: currentRegion.latitude,
            longitude: currentRegion.longitude,
          }}
          title="Casa do Fernando"
          description="Essa é a location do usuário"
        />
      )}
    </Container>
  ) : (
    <ActivityIndicator size="large" />
  );
}

// type Region {
//     latitude: Number,
//     longitude: Number,
//     latitudeDelta: Number,
//     longitudeDelta: Number,
//   }
