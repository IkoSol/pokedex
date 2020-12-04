import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';

export const LedDesign = () => {
  return (
    <View style={styles.mainCircle}>
      <View style={styles.baseCircle}>
        <View style={styles.topCircle}>
          <View style={styles.brightCircle}>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCircle: {
    marginLeft: 20,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 1,
    backgroundColor: '#DADADA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 1,
    backgroundColor: '#31699B',
  },
  topCircle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#50AAF6',
    marginLeft: 5,
    marginTop: 5,
  },
  brightCircle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: 'white',
    marginTop: 3,
    marginLeft: 2,
  },
});
