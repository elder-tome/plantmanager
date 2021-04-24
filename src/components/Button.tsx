import React, { ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

import colors from "../styles/colors";
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  blocked?: boolean,
  children: ReactNode
}

export default function Button({ children, blocked = false, ...otherProperties }: ButtonProps) {
  return (
    <>
      { !blocked ?
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          disabled={false}
          {...otherProperties
          }
        >
          <Text style={styles.textButton}>{children}</Text>
        </TouchableOpacity >
        :
        <TouchableOpacity
          style={[
            styles.button,
            { opacity: 0.5 },
          ]}
          activeOpacity={0.7}
          disabled={true}
          {...otherProperties}
        >
          <Text style={styles.textButton}>{children}</Text>
        </TouchableOpacity>
      }
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 16,
  },
  textButton: {
    fontFamily: fonts.complement,
    color: colors.white,
    fontSize: 17,
  }
});
