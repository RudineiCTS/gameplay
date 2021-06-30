import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {RectButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';



import {theme} from '../../global/styles/theme';
import {styles} from './styles';


export function AppointmentsCreate() {
  const [category, setCategory] = useState('');
  return (
    <Background>
      <Header title={'Agendar Partida'}/>
      <Text style={styles.label}> Categoria </Text>

      <CategorySelect 
        hasChecked
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.selection}>
            <View style={styles.image}/>
            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecionar servidor
              </Text>
            </View>
            <Feather 
              name='arrow-right' 
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
        
      </Background>

  )
}
