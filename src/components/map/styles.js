import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

export const Container = styled(MapView)({
  ...StyleSheet.absoluteFillObject,
});
