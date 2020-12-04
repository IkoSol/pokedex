import React from 'react';
import {View, Text} from 'native-base';

export const HeightAndWeight = ({height, weight}) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 10, alignSelf: 'center'}}>
      <Text style={{fontWeight: 'bold'}}>Height: </Text>
      <Text>{height / 10} m. </Text>
      <Text style={{fontWeight: 'bold'}}>Weight: </Text>
      <Text>{weight / 10} kg.</Text>
    </View>
  );
};
