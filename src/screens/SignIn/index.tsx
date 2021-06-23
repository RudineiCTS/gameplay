import React from 'react';
import { View, StatusBar, Image, Text } from 'react-native';

import Illustration from '../../assets/illustration_pf.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import {  styles  } from '../SignIn/style';

export function SignIn(){
  return(
    <View style={styles.container}>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />

      <Image source={Illustration}
      resizeMode="stretch"
      style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}> 
          Conecte-se {'\n'}
          e Organize suas {'\n'}
          jogatinas
          
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title='Entrar com Discord' activeOpacity={0.7}/>
        
      </View>
    </View>
  )
}