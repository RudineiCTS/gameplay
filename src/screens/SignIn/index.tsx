import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

import Illustration from '../../assets/illustration_pf2.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import {  styles  } from '../SignIn/style';
import { Background } from '../../components/Background';

export function SignIn(){
  const navigation = useNavigation()

  function handleSignIn(){
    navigation.navigate('home')
  }
  return(
    <Background>
      <View style={styles.container}>
        <Image source={Illustration}
        resizeMode="stretch"
        style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}> 
            Conecte-se {'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
            <ButtonIcon title='Entrar com Discord' onPress={handleSignIn}/>
        </View>
      </View>
    </Background>
  )
}