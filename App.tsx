import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts, 
  Jost_400Regular, 
  Jost_500Medium, 
  Jost_600SemiBold 
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
    <StatusBar style='auto' />
    <Routes />
    </>
  );
}
