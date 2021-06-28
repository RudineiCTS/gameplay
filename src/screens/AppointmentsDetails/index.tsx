import React from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler';
import {Fontisto} from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import {theme} from '../../global/styles/theme';
import BannerPNG from '../../assets/banner.png'

import {styles} from './styles';
import { ListHeader } from '../../components/ListHeader';

export function AppointmentsDetails() {
  const members =[
    {
      id:'1',
      username:'Rudinei',
      url:'https://github.com/rudineicts.png',
      status:'online',
    },
    {
      id:'2',
      username:'Rudinei',
      url:'https://github.com/rudineicts.png',
      status:'offline',
    }
  ]
  return (
    <Background>
      <Header 
        title={'Detalhes'}
        action={
          <BorderlessButton>
            <Fontisto 
              name={'share'}
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
        />

        <ImageBackground 
        source={BannerPNG}
        style={styles.banner}
        >
          <View style={styles.bannerContent}>
            <Text style={styles.title}>Lendários</Text>
            <Text style={styles.subtitle}>
              É hoje que vamos chegar ao challenger sem perder uma partida da md10
            </Text>
          </View>
        </ImageBackground>
        <ListHeader title ={'Jogadores'} subtitle={'total 3'}/>
        <FlatList 
          data={members}
          
        />
      </Background>

  )
}
