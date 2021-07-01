import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import {RectButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';


import {theme} from '../../global/styles/theme';
import {styles} from './styles';


export function AppointmentsCreate() {
  const [category, setCategory] = useState('');
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
    <ScrollView >
      <Background>
          <Header title={'Agendar Partida'}/>
          <Text style={[
            styles.label,
            {marginTop:32, marginLeft:24,marginBottom: 15}]
            }>
            Categoria 
          </Text>

          <CategorySelect 
            hasChecked
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton>
              <View style={styles.select}>

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
          
            <View style={styles.field}>
              {/* field está em flex direction row 
                ou seja, uma view vai ficar do lado da outra
              */}
              <View>
                <Text style={styles.label}> Dia e mês</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={styles.divider}> / </Text>
                  <SmallInput maxLength={2}/>
                </View>
              </View>

              <View>
                <Text style={styles.label}> Hora e minuto</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={styles.divider}> : </Text>
                  <SmallInput maxLength={2}/>
                </View>
              </View>

            </View>
            
              <View style={[styles.field,,{marginBottom:12}]}>
                <Text style={styles.label}>
                    Descrição
                </Text>
                <Text style={styles.characterLimits}> Max 100 caracteres </Text>
              </View>
              
              <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              />
          
            <View style={styles.footer}>
              <Button title='Agendar' />
            </View>
          </View>
          
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
