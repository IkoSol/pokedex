import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import {MButton} from './MButton';

export const ButtonsContainer = ({handleDecreaseID, handleIncreaseID}) => {
  return (
    <View style={styles.buttonsContainer}>
      <MButton character={'<'} handleEvent={() => handleDecreaseID()} />
      <MButton character={'>'} handleEvent={() => handleIncreaseID()} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
