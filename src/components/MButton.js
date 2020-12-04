import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';

export const MButton = ({handleEvent, character}) => {
  return (
    <Button dark style={styles.button} onPress={() => handleEvent()}>
      <Text style={styles.textBtn}>{character}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 70,
    justifyContent: 'center',
  },
  textBtn: {
    fontSize: 32,
    fontWeight: '700',
  },
});
