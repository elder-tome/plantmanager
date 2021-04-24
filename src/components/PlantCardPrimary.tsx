import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';


import colors from "../styles/colors";
import fonts from '../styles/fonts';

interface PlantCardProps extends RectButtonProperties {
  data: {
    name: string,
    photo: string
  }
}

export default function PlantCardPrimary({ data, ...rest }: PlantCardProps) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri uri={data.photo} height={90} width={74} />
      <Text style={styles.name}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 154,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 8,
    backgroundColor: colors.shape
  },
  name: {
    fontFamily: fonts.complement,
    color: colors.green_dark,
    fontSize: 12,
  }
});
