import React from 'react';
import { AuthProvider } from './src/hooks/auth';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import { Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter'
import {Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading';

import {Background} from './src/components/Background';
import {Routes} from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Background >
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
   </Background>
  );
}
