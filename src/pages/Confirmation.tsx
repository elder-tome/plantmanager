import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function Confirmation() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>Agora vamos começar a cuidar das suas{'\n'}plantinhas com muito cuidado.</Text>
        <View style={styles.footer}>
          <Button>Começar</Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 78,
    marginBottom: 64
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    textAlign: 'center',
    marginBottom: 16
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    color: colors.body_dark,
    marginBottom: 40
  },
  footer: {
    width: '100%',
    paddingHorizontal: 40
  }

});
