import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import watering from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Welcome() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}suas plantas de{'\n'}forma fácil
      </Text>
      <Image style={styles.image} source={watering} resizeMode='contain' />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas{'\n'}plantas.
        Nós cuidamos de lembrar você{'\n'}sempre que
        precisar.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
      >
        <Feather name='chevron-right' style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 80,
    lineHeight: 38
  },
  image: {
    height: Dimensions.get('window').width * 0.73,
    width: '100%',
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    color: colors.body_dark,
  },
  button: {
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
    marginBottom: 56,
  },
  buttonIcon: {
    fontSize: 24,
    color: colors.white,
  }
});
