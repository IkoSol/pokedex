import React, {useEffect, useState} from 'react';
import {Card, CardItem, Text, View} from 'native-base';
import {Image, StyleSheet, ScrollView} from 'react-native';
import {HeightAndWeight} from '../../components/heightAndWeight';

export const PokemonCard = ({pokemonData, pokemonSprite}) => {
  const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

  const pokemonAbilities = pokemonData && pokemonData.abilities.map((ability, index) => { 
    return(
      <View key={index}>
        <Text style={{alignSelf: 'center'}}>{ability.ability.name}</Text>
      </View>
    );
  });

  const pokemonTypes = pokemonData && pokemonData.types.map((type, index) => { 
    return(
      <View key={index}>
        <Text style={{alignSelf: 'center'}}>{type.type.name}</Text>
      </View>
    );
  });

  return (
    <Card style={styles.card}>
      <CardItem style={styles.pokemonTitle}>
        <Text style={styles.pokemonName}>
          {`${pokemonData.id}. ${pokemonName}`}
        </Text>
      </CardItem>
      <CardItem cardBody style={styles.cardItemBody}>
        <Image source={{uri: pokemonSprite}} style={styles.image} />
      </CardItem>
      <CardItem style={styles.cardItemFooter}>
        <ScrollView>
          <Text style={styles.subtitle}>Habilities</Text>
          {pokemonAbilities}
          <Text style={[styles.subtitle, {marginTop: 10}]}>Types</Text>
          {pokemonTypes}
          <HeightAndWeight
            height={pokemonData.height}
            weight={pokemonData.weight}
          />
        </ScrollView>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#DEDEDE',
    alignSelf: 'center',
    width: '90%',
    marginTop: 10,
  },
  cardItemBody: {
    width: '100%',
    height: 300,
    backgroundColor: 'transparent',
  },
  cardItemFooter: {
    marginVertical: 15,
    backgroundColor: '#5AC158',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 200,
    width: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonTitle: {
    marginTop: 10,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    height: 300,
    width: null,
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderWidth: 1,
  },
});
