import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image
} from "react-native";

import colors from "../styles/colors";
import fonts from '../styles/fonts';

interface HeaderProps {
  username: string,
  image: string
}

export default function Header({ username, image }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Olá,</Text>
        <Text style={styles.userName}>{username}</Text>
      </View>
      <Image style={styles.img} source={{
        uri: image
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  text: {
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 32,
  },
  userName: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 32,
    lineHeight: 43
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 35
  }
});
