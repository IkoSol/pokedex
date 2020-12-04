import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';

export const MiniLedDesign = ({mainColor, baseColor}) => {
  return (
    <View style={{
      marginLeft: 20,
      width: 20,
      height: 20,
      borderRadius: 20 / 2,
      borderWidth: 1,
      backgroundColor: mainColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{width: 11,
        height: 11,
        borderRadius: 11 / 2,
        backgroundColor: baseColor,
        marginRight: 4,
        marginBottom: 3,
      }}>
        <View style={{width: 4,
          height: 4,
          borderRadius: 4 / 2,
          backgroundColor: 'white',
          marginLeft: 1,
          marginTop: 2,
        }}></View>
      </View>
    </View>
  );
};
