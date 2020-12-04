import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import {PokemonCard} from '../pokemonCard';
import {ButtonsContainer} from '../../components/buttonsContainer';
import {LedDesign} from '../../components/ledDesign';
import {MiniLedDesign} from '../../components/miniLedDesign';

export const Home = () => {
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(false);
  const [pokemonID, setPokemonID] = useState(1);
  const [pokemonSprite, setPokemonSprite] = useState();

  const handleIncreaseID = () => {
    if (pokemonID === 150) {
      setPokemonID(1);
      return;
    }
    setPokemonID(pokemonID + 1);
  };

  const handleDecreaseID = () => {
    if (pokemonID === 1) {
      setPokemonID(150);
      return;
    }
    setPokemonID(pokemonID - 1);
  };

  useEffect(() => {
    getPokemonData();
    setPokemonSprite(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`)
  },[pokemonID]);

  const getPokemonData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
      const json = await response.json();
      setPokemonData(json);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Container style={styles.container}>
          <Content>
            <View style={styles.ledsContainer}>
              <LedDesign />
              <MiniLedDesign mainColor={'#7D1B1F'} baseColor={'#DE3745'} />
              <MiniLedDesign mainColor={'#9A783D'} baseColor={'#DDCA64'} />
              <MiniLedDesign mainColor={'#3B643B'} baseColor={'#588B5E'} />
            </View>
            {pokemonData && (
              <PokemonCard
                pokemonID={pokemonID}
                pokemonData={pokemonData}
                pokemonSprite={pokemonSprite}
              />
            )}
            <ButtonsContainer
              handleIncreaseID={() => handleIncreaseID()}
              handleDecreaseID={() => handleDecreaseID()}
            />
            {loading && <Spinner color={'black'} />}
          </Content>
        </Container>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    backgroundColor: 'red',
  },
  ledsContainer: {
    height: 90,
    width: '100%',
    flexDirection: 'row',
  },
});
