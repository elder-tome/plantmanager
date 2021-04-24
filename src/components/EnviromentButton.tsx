import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import colors from "../styles/colors";
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProperties {
  title: string,
  active?: boolean
}

export default function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[styles.title, active && styles.titleActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 5,
    backgroundColor: colors.shape
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  title: {
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 12,
  },
  titleActive: {
    fontFamily: fonts.complement,
    color: colors.green_dark,
  }
});
