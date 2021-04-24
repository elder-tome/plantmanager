import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function UserIdentification() {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('Confirmation');
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.emoji}>{isFilled ? '😀' : '🤔'}</Text>
          <Text style={styles.title}>Como podemos{'\n'}chamar você?</Text>
          <TextInput
            style={[
              styles.input,
              (isFocused || isFilled) && { borderColor: colors.green }
            ]}
            placeholder='Digite um nome'
            placeholderTextColor={colors.body_light}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onChangeText={handleInputChange}
          />
          <View style={styles.footer}>
            <Button
              disabled={!isFilled}
              opacity={!isFilled}
              onPress={handleSubmit}
            >Confirmar</Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    paddingHorizontal: 56,
  },
  emoji: {
    fontSize: 32,
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.body_dark,
    fontFamily: fonts.text,
    width: '100%',
    fontSize: 18,
    marginTop: 28,
    padding: 12,
    textAlign: 'center',
    marginBottom: 40
  },
  footer: {
    width: '100%',
    paddingHorizontal: 16
  }

});
